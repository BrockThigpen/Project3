import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import httpClient from './httpClient';

import NavBar from './NavBar';
const LogIn = lazy(() => import('./views/LogIn'));
const LogOut = lazy(() => import('./views/LogOut'));
const SignUp = lazy(() => import('./views/SignUp'));
const Games = lazy(() => import('./views/Games'));
const Leaderboard = lazy(() => import('./views/Leaderboard'));
const Pong = lazy(() => import('./views/Pong'));
const FlappyBird = lazy(() => import('./views/FlappyBird'));
const Snake = lazy(() => import('./views/Snake'));
const Home = lazy(() => import('./views/Home'));

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <NavBar currentUser={currentUser} />
          <div className="AppContainer">
            <Switch>
              <Route
                path="/login"
                render={(props) => {
                  return (
                    <LogIn
                      {...props}
                      onLoginSuccess={this.onLoginSuccess.bind(this)}
                    />
                  );
                }}
              />
              <Route
                path="/logout"
                render={(props) => {
                  return <LogOut onLogOut={this.logOut.bind(this)} />;
                }}
              />
              {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
              <Route
                path="/signup"
                render={(props) => {
                  return (
                    <SignUp
                      {...props}
                      onSignUpSuccess={this.onLoginSuccess.bind(this)}
                    />
                  );
                }}
              />
              <Route
                path="/Games"
                render={() => {
                  return currentUser ? <Games /> : <Redirect to="/login" />;
                }}
              />
              <Route
                path="/Leaderboard"
                render={() => {
                  return currentUser ? (
                    <Leaderboard />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />
              <Route
                path="/FlappyBird"
                render={() => {
                  return currentUser ? (
                    <FlappyBird />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />
              <Route
                path="/Pong"
                render={() => {
                  return currentUser ? <Pong /> : <Redirect to="/login" />;
                }}
              />
              <Route
                path="/Snake"
                render={() => {
                  return currentUser ? <Snake /> : <Redirect to="/login" />;
                }}
              />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default App;

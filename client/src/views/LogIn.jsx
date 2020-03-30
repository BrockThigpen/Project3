import React from 'react'
import { Link } from 'react-router-dom'
import httpClient from '../httpClient'

class LogIn extends React.Component {
  state = {
    fields: { name: '', password: '' },
  }

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value,
      },
    })
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    httpClient.logIn(this.state.fields).then(user => {
      this.setState({ fields: { name: '', password: '' } })
      if (user) {
        this.props.onLoginSuccess(user)
        this.props.history.push('/Games')
      }
    })
  }

  render() {
    const { name, password } = this.state.fields
    return (
      <div className="homeContainer text-center">
      <div className="LogIn">
        <div className="row">
          <div className="column column-33 column-offset-33">
          <h1>
        <strong className="text-white">Sign In</strong>
      </h1>
      <h5 className="text-white"><strong>If you are an EXISTING user please "SIGN IN". If NOT please select "SIGN UP"</strong></h5>
            <form
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}
            >
              <input type="text" placeholder="Username" name="name" value={name} />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
              />
              <button type="button" className="selBtn">Sign In</button>
              <Link to="/signup">
                <button type="button" className="selBtn">
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default LogIn

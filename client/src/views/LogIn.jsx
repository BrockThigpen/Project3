import React from 'react'
import httpClient from '../httpClient'
import { Link } from 'react-router-dom'
import logo from '../images/appname.png'

class LogIn extends React.Component {
  state = {
    fields: { email: '', password: '' },
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
      this.setState({ fields: { email: '', password: '' } })
      if (user) {
        this.props.onLoginSuccess(user)
        this.props.history.push('/Games')
      }
    })
  }

  render() {
    const { email, password } = this.state.fields
    return (
      <div className="homeContainer text-center">
        <div className="LogIn">
          <div className="row">
            <div className="column column-33 column-offset-33">
              <img src={logo} alt="website logo" width="80%" height="auto"/>
              <br></br>
              {/* <h5 className="text-white" width="80%"><strong>If you are an EXISTING user please "LOG IN". If NOT please select "SIGN UP"</strong></h5> */}
              <form
                onChange={this.onInputChange.bind(this)}
                onSubmit={this.onFormSubmit.bind(this)}
              >
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                />
                <br></br>
                <button className="selBtn">LOG IN</button>
                <h5 className="text-white"><strong>OR</strong></h5>
                <Link to="/signup">
                  <button className="selBtn">
                    SIGN UP</button>
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

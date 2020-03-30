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
      <div className="LogIn">
        <div className="row">
          <div className="column column-33 column-offset-33">
            <h1>Log In</h1>
            <form
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}
            >
              <input type="text" placeholder="Name" name="name" value={name} />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
              />
              <button>Log In</button>
              <Link to="/signup">
                <button type="button" className="selBtn">
                  Sign Up
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn

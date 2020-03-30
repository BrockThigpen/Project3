import React from 'react'
import { Link } from 'react-router-dom'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
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
    httpClient.signUp(this.state.fields).then(user => {
      this.setState({ fields: { name: '', email: '', password: '' } })
      if (user) {
        this.props.onSignUpSuccess(user)
        this.props.history.push('/Games')
      }
    })
  }

  render() {
    const { name, password } = this.state.fields
    return (
      <div className="homeContainer text-center">
      <div className="SignUp">
        <div className="row">
          <div className="column column-33 column-offset-33">
            <h1 className="text-white"><strong>Sign Up</strong></h1>
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
              <Link to="/login">
                <button type="button" className="selBtn">
                  Login
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

export default SignUp

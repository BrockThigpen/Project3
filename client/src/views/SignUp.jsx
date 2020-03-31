import React from 'react'
import httpClient from '../httpClient'
import logo from '../images/appname.png'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
  state = {
    fields: { name: '', email: '', password: '' },
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
        this.props.history.push('/games')
      }
    })
  }

  render() {
    const { name, email, password } = this.state.fields
    return (
      <div className="homeContainer text-center">
      <div className="SignUp">
        <div className="row">
          <div className="column column-33 column-offset-33">
          <img src={logo} alt="website logo" width="80%" height="auto"/>
              <br></br>
            <form
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}
            >
              <input type="text" placeholder="name" name="name" value={name} />
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
              <button className="selBtn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SignUp

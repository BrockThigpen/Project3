import React from 'react'
import httpClient from '../httpClient'
import logo from '../images/appname_big.png'

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
            <div className="column">
            <img src={logo} alt="website logo" width="90%" height="auto"/>
              <hr></hr>
              <form
                onChange={this.onInputChange.bind(this)}
                onSubmit={this.onFormSubmit.bind(this)}
              >
                <div>
                  <input type="text" placeholder="name" name="name" value={name} />
                  </div>
                <div>
                  <input type="text" placeholder="Email" name="email" value={email}/>
                </div>
                <div>
                  <input type="password" placeholder="Password" name="password" value={password}/>
                </div>
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

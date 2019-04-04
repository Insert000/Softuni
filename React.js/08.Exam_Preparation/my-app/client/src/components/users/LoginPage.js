import React from 'react'
import LoginForm from './LoginForm'
import Auth from './Auth'
import FormHelpers from '../common/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    UserStore.on(UserStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin)
  }

  componentWillUnmount () {
    UserStore.removeListener(UserStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin)
  }

  handleUserChange (ev) {
    FormHelpers.handleFormChange.bind(this)(ev, 'user')
  }

  handleUserForm (ev) {
    ev.preventDefault()
    UserActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({
        error: data.message
      })
    } else {
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)
      toastr.success(data.message)
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          error={this.state.error}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default LoginPage
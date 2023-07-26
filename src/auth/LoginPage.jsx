import React from 'react'
import { LoginForm } from './LoginForm'
import Header from '../HeaderPublic'


const LoginPage = () => {
  return (
    <div>
        <Header />
        <h1>Login</h1>
        <LoginForm />
    </div>
  )
}

export default LoginPage
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postLogin } from './AuthModule'


const styles = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #fff',
    Width: '35%',
    margin: '0 auto',
    padding: '1rem',
    alignItems: 'center'
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const postData = {
      email,
      password
    }
    postLogin(postData)
      .then(res => {
        if (res === 'Authenticated') {
          navigate("/dashboard")
        }
      })
      .catch(err => console.error(err))
  
  }

  return (
    <div>
        <form onSubmit={ handleSubmit } style={ styles }>
            <label>Email:</label>
            <input 
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={(event => setEmail(event.target.value))}
            />
            <label>Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              value={ password }
              onChange={(event => setPassword(event.target.value))}
            />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default LoginForm
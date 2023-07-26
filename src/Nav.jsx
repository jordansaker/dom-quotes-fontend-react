import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">
            <button className='buttonStyles'>Home</button>
        </Link>
        <Link to="/login">
            <button className='buttonStyles'>Login</button>
        </Link>
    </div>
  )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom'

const NavDashboard = () => {
  return <>
    <div>
        <Link to="/">
            <button className='buttonStyles'>Home</button>
        </Link>
        <Link to="/dashboard/new/">
            <button className='buttonStyles'>New Quote</button>
        </Link>
        <Link to="/login">
            <button className='buttonStyles'>Logout</button>
        </Link>
    </div>
  </>
}

export default NavDashboard
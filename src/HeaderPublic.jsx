import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    alignItems: 'center'
}

const name = {
    width: '20%',
}

const HeaderPublic = () => {
  return (
    <header style={headerStyles}>
        <div style={name}>
            <h4>DOM Torretto Quotes API</h4>
        </div>
        <Nav />
    </header>
  )
}

export default HeaderPublic
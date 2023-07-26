import React from 'react'
import { auth } from './auth/AuthModule'
import Dashboard from './Dashboard'

const DashboardPage = () => {
  return <>
    { auth.admin() == 'Admin access' ? <Dashboard /> : <p>Restricted</p> }
  </>
}

export default DashboardPage
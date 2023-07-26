import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './auth/LoginPage'
import HomePage from './HomePage'
import DashboardPage from './DashboardPage'
import NewQuotePage from './NewQuotePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/dashboard/new/' element={<NewQuotePage />} />
      </Routes>
    </>
  )
}

export default App

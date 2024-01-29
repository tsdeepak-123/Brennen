import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/User/HomePage'
import DonationPage from '../Pages/User/DonationPage'
import ComplaintPage from '../Pages/User/ComplaintPage'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/donateblood' element={<DonationPage/>}/>
        <Route path='/complaints' element={<ComplaintPage/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes
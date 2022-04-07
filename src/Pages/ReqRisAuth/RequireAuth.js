import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/authContext'


const RequireAuth = () => {
  const {authState: {userId}} = useAuth();
  console.log(userId)
  const location = useLocation();
  return userId ? (
      <Outlet />
    
  ): (
      <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default RequireAuth
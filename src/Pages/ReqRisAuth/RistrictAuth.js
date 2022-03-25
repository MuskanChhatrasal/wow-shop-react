import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/authContext'


const RistrictAuth = () => {
  const {authState: {userId}} = useAuth();
  console.log(userId)
  const location = useLocation();
  return userId ? (
    <Navigate to='/' state={{from: location}} replace/>
  ): (
      <Outlet />
  )
}

export default RistrictAuth
import React from 'react'
import { Link } from 'react-router-dom'
import './authentication.css'

const Login = () => {
  return (
     <div className="wrapper login-wrapper">
        <h2>Login</h2>
        <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Create password" required />
            </div>
            <div className="input-box button">
                <input type="Submit" value="Login Now" />
            </div>
            <div className="text">
                <h3>Not having an account? <Link to='/signup'>Signup now</Link></h3>
            </div>
        </form>
    </div>
  )
}

export default Login
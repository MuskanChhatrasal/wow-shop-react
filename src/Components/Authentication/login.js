import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/authContext'
import './authentication.css'

const Login = () => {
    const [userDetails, setUserDetails] = useState({email: '', password: ''})
    const [error, setError] = useState({isError: false, text: ''})
    const [toggleShowPassword, setToggleShowPassword] = useState(true)

    const {login, testLogin} = useAuth();

    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            setError({isError: false, text: ''})
        }, 3000);

        return ()=>{
            clearTimeout(timeoutId)
        }
    },[error])
    
    const loginHandler = (e) =>{
        e.preventDefault();
        console.log('hello')
        if(!userDetails.email || !userDetails.password){
            setError({isError: true, text: 'Please enter all the fields'})
        }else if(!userDetails.email.includes('@')){
            setError({isError: true, text: 'Invalid Email-Id'})
        }else{
            login(userDetails)
            setUserDetails({email: '', password: ''})
        }
    }

    

    
  return (
     <div className="wrapper login-wrapper">
     {error && <p className='error-text'>{error.text}</p>}
        <h2>Login</h2>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="input-box">
                <input type="text" placeholder="Enter your email" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email: e.target.value})} />
            </div>
            <div className="input-box input-icons">
               {toggleShowPassword ? <i class="fas fa-eye icon" onClick={()=>setToggleShowPassword(!toggleShowPassword)}></i>:<i class="fas fa-eye-slash icon" onClick={()=>setToggleShowPassword(!toggleShowPassword)}></i>}  
               <input type={toggleShowPassword ? "password":'text'}  placeholder="Create password" className='input-field' value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails, password: e.target.value})} />
            </div>
            <div className="input-box button">
                <input type="Submit" value="Login Now" onClick={(e)=>loginHandler(e)} />
            </div>
            <div className="input-box button">
                <input type="Submit" value="Login with test Credentials" onClick={()=>testLogin()} />
            </div>
            <div className="text">
                <h3>Not having an account? <Link to='/signup'>Signup now</Link></h3>
            </div>
        </form>
    </div>
  )
}

export default Login
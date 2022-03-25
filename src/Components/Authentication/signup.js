import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/authContext'
import './authentication.css'

const Signup = () => {
  const [userDetails, setUserDetails] = useState({firstName: '',lastName: '',email: '', password: '', confirmPassword: '', terms: false})
  const [toggleShowPassword, setToggleShowPassword] = useState(true)
  const [toggleShowConfirmPass, setToggleShowConfirmPass] = useState(true)
  const [error, setError] = useState({isError: false, text: ''})


 
  const {signup} = useAuth();

  useEffect(()=>{
      const timeoutId = setTimeout(()=>{
       setError({isError: false, text: ''})
      }, 3000)

      return ()=>clearTimeout(timeoutId)
  },[error])


  const submitHandler = (e) =>{
      e.preventDefault()
      const passwordValidation = /^(?=.*\d)(?=.*[a-z]).{5,10}$/;

      if(!userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.password || !userDetails.confirmPassword || !userDetails.terms){
         setError({isError: true, text: 'Please Enter all the Fields!!'})
      }

      else if(!userDetails.email.includes('@')){
          setError({isError: true, text: 'Invalid Email-Id'})
      }

      else if(!userDetails.password.match(passwordValidation)){
          setError({isError: true, text: 'The password must be alphanumberic and atleast 5 characters long!!'})
      }

      else if(userDetails.password !== userDetails.confirmPassword){
          setError({isError: true, text: 'Password and Confirm Password Not Match!!'})
      }

      else if(!userDetails.terms){
          setError({isError: true, text: 'Please accept terms and conditions!!'})
      }else{
          signup(userDetails)
          setUserDetails({firstName: '', lastName: '', email: '', password: '', confirmPassword: '', terms: false})
      }
  }
  return (
    <div className="wrapper">
    {error && <p className='error-text'>{error.text}</p>}
        <h2>Sign-Up</h2>
        <form>
            <div className="input-box">
                <input type="text" placeholder="Enter your First name" name='firstName' id='name' value={userDetails.fullName} onChange={(e)=>setUserDetails({...userDetails, firstName: e.target.value})} />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Enter your last name" name='lastName'  value={userDetails.fullName} onChange={(e)=>setUserDetails({...userDetails, lastName: e.target.value})} />
            </div>
            <div className="input-box">
            
                <input type="text" placeholder="Enter your email"  name='email' id='email' value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails, email: e.target.value})} />
            
            </div>
            <div className="input-box input-icons">
               {toggleShowPassword ? <i class="fas fa-eye icon" onClick={()=>setToggleShowPassword(!toggleShowPassword)}></i>:<i class="fas fa-eye-slash icon" onClick={()=>setToggleShowPassword(!toggleShowPassword)}></i>}
               <input type= {toggleShowPassword ? "password":'text' } placeholder="Create password" className='input-field' value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails, password: e.target.value})} /> 
            </div>
            <div className="input-box input-icons">
                {toggleShowConfirmPass ? <i class="fas fa-eye icon" onClick={()=>setToggleShowConfirmPass(!toggleShowConfirmPass)}></i>:<i class="fas fa-eye-slash icon" onClick={()=>setToggleShowConfirmPass(!toggleShowConfirmPass)}></i>}
                <input type={toggleShowConfirmPass ? 'password':'text'}  placeholder="Confirm password" className='input-field' value={userDetails.confirmPassword} onChange={(e)=>setUserDetails({...userDetails, confirmPassword: e.target.value})} />
            </div>
            <div className="policy">
                <input type="checkbox" value={userDetails.terms} onChange={(e)=>setUserDetails({...userDetails, terms: e.target.value})} />
                <h3>I accept all terms & condition</h3>
            </div>
            <div className="input-box button">
                <input type="Submit" value="Register Now" onClick={(e)=>submitHandler(e)} />
            </div>
            <div className="text">
                <h3>Already have an account? <Link to='/login'>Login now</Link></h3>
            </div>
        </form>
    </div>
  )
}

export default Signup


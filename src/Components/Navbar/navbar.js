import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useFilter } from '../../Context/context'
import { useAuth } from '../../Context/AuthContext/authContext'

const Navbar = () => {
  
  const {cartState} = useFilter();
  const [cartQuantity, setCartQuantity] = useState(cartState.cart)
  const {authState: {userName, loggedIn}, logout } = useAuth();

  useEffect(()=>{
    setCartQuantity(cartState.cart.length)
  }, [cartState.cart])

  return (
    <div>
      <header className='header'>
      <a className="logo wow-shop">
        <Link to='/'><i className='fas fa-shopping-basket'></i> Wow shop</Link>
      </a>

      <nav className="navbar">
        <Link to='/'><a>home</a></Link>
        {/* <a href="#speciality">Offer</a> */}
        <Link to='/products'><a>products</a></Link>
        <Link to='/wishlist'><a>Wishlist</a></Link>
        <Link to='/cart'><a>Cart</a></Link>

        {/* <a href="#home">Login</a> */}
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <Link to='/login'><i class="fas fa-user-circle profile-icon" style={{fontSize: '3rem'}}></i></Link>
        <span className='userName'>{userName}</span>
        <Link to='/cart'><div className="fas fa-shopping-cart" id="cart-btn" style={{position: 'relative'}}>
        <span style={{position: 'absolute', top: -20, right: 0, fontSize: '1.5rem'}}>{cartQuantity}</span>
        </div></Link>
        {/* <div className="fas fa-user" id="login-btn">
        </div> */}
        {/* <li className={`${loggedIn ? "loggedIn" : "loggedNotDispaly" }`}>
                    <Link className="login" to="/login">
                       <i class="fas fa-sign-out-alt logout-icon" onClick={()=> logout()}></i>
                    </Link>
                    <span className="logout-txt">LogOut</span>
                </li> */}

              <Link to='/login'><i className="fas fa-sign-out-alt" id= {loggedIn ? "logout-btn":'logoutNotDisplay'}  style={{position: 'relative'}}>
              <span style={{position: 'absolute', marginTop: '4rem', marginLeft: '-4rem', fontSize: '1.25rem'}} className='logout-txt'>logOut</span>
              </i></Link>
      </div>
    </header>
    </div>
  )
}

export default Navbar
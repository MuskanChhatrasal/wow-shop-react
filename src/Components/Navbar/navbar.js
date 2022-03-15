import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
        <Link to='/cart'><div className="fas fa-shopping-cart" id="cart-btn">
        </div></Link>
        <div className="fas fa-user" id="login-btn">
        </div>
      </div>
    </header>
    </div>
  )
}

export default Navbar
import React from 'react'
import { useCart } from '../../Context/cartContext'

const CartItem = ({cartItem}) => {

    const {removeFromCart, updateCartQuantity} = useCart();
  return (
    <div class="card card-flex">
                <div>
                  <img src={cartItem.imageUrl} className='card-img'></img>
                  
                  </div>

                  <span style={{ fontSize: '2rem', marginLeft: '-3rem', fontWeight: '400'}}>{cartItem.title}</span>
                  <p className='price'>₹ {cartItem.priceNew}</p>
                  
                  <div>
                     <button className='updateCart-btn' onClick={()=>updateCartQuantity(cartItem._id, 'increment', 'Cart updated')}><span>+</span></button>
                     <span className='cart-qty'>{cartItem.qty}</span>
                     <button className='updateCart-btn' onClick={()=>updateCartQuantity(cartItem._id, 'decrement', 'Cart updated')}><span>-</span></button>
                  </div>
                  <button className="btn secondary-text-btn-sm delete-btn" onClick={()=>removeFromCart(cartItem._id, 'Removed from Cart')}><i className="fas fa-trash"></i></button>
                </div>
  )
}

export default CartItem
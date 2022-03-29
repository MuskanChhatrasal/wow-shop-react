import React  from 'react'
import './cart.css'
import { useAuth } from '../../Context/AuthContext/authContext'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

const Cart = () => {
    const {authState: {cart}} = useAuth();
  
  return (
    <div className="cart-container">
        <div className="productContainer">
            <div className="box-container">


                {cart.map((cartItem)=>{
                    return <CartItem cartItem={cartItem} />

                })}
            
               
                
            </div>
        </div>

        <CartSummary />
        

    </div>
  )
}

export default Cart
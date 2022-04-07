import React, {useState, useEffect} from 'react'
import { useAuth } from '../../Context/AuthContext/authContext'

const CartSummary = () => {
    const [totalItem, setTotalItem] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const {authState: {cart}} = useAuth();
    

     useEffect(()=>{
        setTotalItem(totalItemQty(cart))
    }, [cart])

    useEffect(()=>{
        setTotalPrice(totalItemPrice(cart))
    },[cart])

    const totalItemQty = (cart) =>{
        const totalQtyReducer = (acc, curr) => acc+=(curr.qty);
        return cart.length === 0 ? 0:cart.reduce(totalQtyReducer,0)
    }

    const totalItemPrice = (cart) =>{
        const totalPriceReducer = (acc, curr) => acc+=(curr.priceNew)*(curr.qty);
        return cart.length === 0 ? 0:cart.reduce(totalPriceReducer,0)
    }
  return (
    <div className="filters summary" style={{marginRight: '2rem'}}>
            <span style={{fontSize: '2rem'}}>Subtotal ({totalItem}) items</span>
            <span style={{fontWeight: '700', fontSize: '2rem'}}>Total: ₹{totalPrice}</span>
            <button type="button" className="checkout-btn">Proceed to Checkout</button>
        </div>
  )
}

export default CartSummary
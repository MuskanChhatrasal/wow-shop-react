import React, { useEffect, useState } from 'react'
import './cart.css'
import Pizza from '../../assets/s-img-1.jpg'
import { cartReducer } from '../../Context/reducer'
import { useFilter } from '../../Context/context'
import { useAuth } from '../../Context/AuthContext/authContext'
import { useCart } from '../../Context/cartContext'

const Cart = () => {
    // const {cartState, cartDispatch} = useFilter();
    const {authState: {cart}} = useAuth();
    const {removeFromCart, updateCartQuantity} = useCart();
    const [totalItem, setTotalItem] = useState();
    const [totalPrice, setTotalPrice] = useState();

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
    <div className="cart-container">
        <div className="productContainer">
            <div className="box-container">
            
               
                {/* <div className="card card-ecom mg-1-all card-flex"> */}
                    {/* <button className="btn secondary-text-btn-sm card-close"><i className="fas fa-trash"></i></button>
                    <div className="card-img-cont">
                        <img className="card-img img-flex" src={Pizza}
                            alt="Burger" />
                    </div>
                    <div className="card-badge">OFFER</div>
                    <h2>Burger</h2> */}
                    {/* <div className="card-body inner-flex">
                        <div className="card-header">
                            <h6 className="card-title">BURGER</h6>
                            <p className="card-desc">Veg Cheese Burger</p>
                            <div className="card-price">
                                <span className="price-new"  style={{fontSize: '1.25rem'}}>Rs.56</span>
                                <span className="price-old"  style={{fontSize: '1.25rem'}}>Rs.80</span>
                                <span className="discount"  style={{fontSize: '1.25rem'}}>(30%)</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="button btn-primary card-button">WISHLIST</button>
                        </div>
                    </div> */}
                {/* </div> */}
{/* 
                <div className='card-flex'>
                   <div className="card-badge">OFFER</div>
                    <div className="card-img-cont">
                        <img className="card-img img-flex" src={Pizza}
                            alt="Burger" />
                    </div>
                </div> */}

                {cart.map((cartItem)=>{
                    return (
                        <div class="card card-flex">
                <div>
                  <img src={cartItem.imageUrl} className='card-img'></img>
                  
                  </div>

                  <span style={{ fontSize: '2rem', marginLeft: '-10rem', fontWeight: 'bold'}}>{cartItem.title}</span>
                  <p className='price'>₹ {cartItem.priceNew}</p>
                  {/* <select className='select-quant'>
                     <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select> */}
                  <button className='updateCart-btn' onClick={()=>updateCartQuantity(cartItem._id, 'increment', 'Cart updated')}>+</button>
                  <span>{cartItem.qty}</span>
                  <button className='updateCart-btn' onClick={()=>updateCartQuantity(cartItem._id, 'decrement', 'Cart updated')}>-</button>
                  <button className="btn secondary-text-btn-sm delete-btn" onClick={()=>removeFromCart(cartItem._id, 'Removed from Cart')}><i className="fas fa-trash"></i></button>
                </div>
                    )
                })}
            
                {/* <div class="card card-flex">
                <div>
                  <img src={Pizza} className='card-img'></img>
                  
                  </div>

                  <span style={{ fontSize: '2rem', marginLeft: '-10rem', fontWeight: 'bold'}}>Burger</span>
                  <p className='price'>₹ 100.00</p>
                  <select className='select-quant'>
                     <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <button className="btn secondary-text-btn-sm delete-btn"><i className="fas fa-trash"></i></button>
                </div> */}
                
            </div>
        </div>

        {/* {cartState.cart.map((it)=>{
            return (
                <div>{it.title}</div>
            )
        })}
         */}

        <div className="filters summary" style={{marginRight: '2rem'}}>
            <span style={{fontSize: '2rem'}}>Subtotal ({totalItem}) items</span>
            <span style={{fontWeight: '700', fontSize: '2rem'}}>Total: ₹{totalPrice}</span>
            <button type="button" className="checkout-btn">Proceed to Checkout</button>
        </div>

        

    </div>
  )
}

export default Cart
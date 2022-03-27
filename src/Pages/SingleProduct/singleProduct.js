import React, {useState} from 'react'
import { useFilter } from '../../Context/context'
import './singleProduct.css'
import { useAuth } from '../../Context/AuthContext/authContext';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/cartContext';



const SingleProduct = ({item}) => {

    // const { cartDispatch} = useFilter()
    const {authState: {loggedIn, cart, wishlist}} = useAuth()
    const [isWish, setIsWish] = useState(false)
    const {addToCart} = useCart();

    {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}

   
  return (

            <div  className= {item.availableOrNot ? "card card-ecom mg-1-all":"card card-ecom mg-1-all not-available"} style={{marginTop: '1rem'}} >
                    {!item.availableOrNot && <h3 className='not-availableHead'>Not Available</h3>}
                    {!loggedIn ? <Link to='/login'><button class="btn secondary-text-btn-sm card-close">:<i class="far fa-heart" style={{color: 'black'}}></i></button></Link>:<button class="btn secondary-text-btn-sm card-close">{isWish ? <i class="fas fa-heart" onClick={()=>setIsWish(!isWish)}></i>:<i class="far fa-heart" onClick={()=>setIsWish(!isWish)}></i>}</button>}
                    <div className="card-img-cont">
                        <img className= {item.availableOrNot ? "card-img" : "card-img not-availableImg" } src={item.imageUrl}
                            alt="veg-momos" />
                    </div>
                    {item.offer && <div className="card-badge card-offer">{item.offerOFF} OFF</div>}
                    <div className="card-body">
                        <div className="card-header">
                            <h6 className="card-title">{item.title}</h6>
                            <p className="card-desc">{item.categoryName}</p>
                            <div className="card-price">
                                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.{item.priceNew}</span>
                                {item.offer && <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.{item.priceOld}</span>}
                                {item.offer && <span className="discount" style={{fontSize: '1.25rem'}}>{item.offerOFF}</span>}
                            </div>
                        </div>
                        <div className="card-footer">
                           { !loggedIn ? 
                              <>
                                <Link to='/login'><button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"} >ADD TO CART</button></Link> 
                              </> 
                            : 
                                <>
                                 {/* <button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"}  onClick={()=>cartDispatch({type: 'ADD_TO_CART', payload: item})}>ADD TO CART</button>} */}
                                 
                                     {
                                         (cart.length !== 0 && cart.some((cartItem)=>cartItem._id === item._id)) ? 
                                           <button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"}>GO TO CART</button>
                                           :
                                           <button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"} onClick={()=>addToCart(item, 'Added to Cart')}>ADD TO CART</button>
                                     }
                                </> 
                           
                           }
                        </div>
                    </div>
                </div>
  )
}

export default SingleProduct
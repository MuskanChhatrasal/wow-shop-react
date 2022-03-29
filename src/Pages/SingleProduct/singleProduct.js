import React  from 'react'
import './singleProduct.css'
import { useAuth } from '../../Context/AuthContext/authContext';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/cartContext';
import { useWishlist } from '../../Context/wishlistContext';



const SingleProduct = ({item}) => {

    // const { cartDispatch} = useFilter()
    const {authState: {loggedIn, cart, wishlist}} = useAuth()
    // const [isWish, setIsWish] = useState(false)
    const {addToCart} = useCart();
    const {addToWishlist} = useWishlist();

    {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}

   
  return (

            <div  className= {item.availableOrNot ? "card card-ecom mg-1-all":"card card-ecom mg-1-all not-available"} style={{marginTop: '1rem'}} >
                    {!item.availableOrNot && <h3 className='not-availableHead'>Not Available</h3>}

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
                              <div style={{display: 'flex'}}>
                                <Link to='/login'><button className= {item.availableOrNot ? "button btn-primary card-button" : "button btn-primary card-button  btn-disabled"} id={item.availableOrNot ? 'addCart-btn':'addCart-Disabledbtn'} >Add to Cart</button></Link> 
                                <Link to='/login'><button className= {item.availableOrNot ? "button btn-primary card-button" : "button btn-primary card-button  btn-disabled"} id={item.availableOrNot ? 'addToWishlist-btn':'addToWishlist-Disabledbtn'}  >Add to Wishlist</button></Link> 
                              </div> 
                              
                            : 
                                <div style={{display: 'flex'}}>
                                 
                                     {
                                         (cart.length !== 0 && cart.some((cartItem)=>cartItem._id === item._id)) ? 
                                           <Link to='/cart'><button className= {item.availableOrNot ? "button btn-primary card-button" : "button btn-primary card-button btn-disabled"} id={item.availableOrNot ? 'addCart-btn':'addCart-Disabledbtn'}>GO TO CART</button></Link>
                                           :
                                           <button className= {item.availableOrNot ? "button btn-primary card-button"  : "button btn-primary card-button btn-disabled"} id={item.availableOrNot ? 'addCart-btn':'addCart-Disabledbtn'} onClick={()=> {item.availableOrNot && addToCart(item, 'Added to Cart')} } >ADD TO CART</button>
                                     }
                                     {
                                         (wishlist.length !== 0 && wishlist.some((listItem)=>listItem._id === item._id)) ? 
                                           <Link to='/wishlist'><button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"} id={item.availableOrNot ? 'addToWishlist-btn':'addToWishlist-Disabledbtn'}>GO TO WISHLIST</button></Link>
                                           :
                                           <button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"} onClick={()=>{item.availableOrNot && addToWishlist(item, 'Added to Wishlist')}} id={item.availableOrNot ? 'addToWishlist-btn':'addToWishlist-Disabledbtn'}>ADD TO WISHLIST</button>
                                     }
                                </div> 
                           
                           }
                        </div>
                    </div>
                </div>
  )
}

export default SingleProduct
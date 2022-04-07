import React from 'react'
import { useAuth } from '../../Context/AuthContext/authContext'
import { useCart } from '../../Context/cartContext';
import { useWishlist } from '../../Context/wishlistContext';
import './wishlist.css'

const Wishlist = () => {
  const {authState: {wishlist, cart}} = useAuth();
  const {addToCart} = useCart();
  const {removeFromWishlist} = useWishlist();
  return (
    <section className="products" id="products">
    <h1 className="heading" style={{marginTop: '8rem'}}> <span>Wishlist</span> </h1>
    <div className='product-card'>
    {wishlist.map((item)=>{
      return (
        <div className="card card-ecom mg-1-all">
                <button className="btn secondary-text-btn-sm card-close"><i className="far fa-heart"></i></button>
                <div className="card-img-cont">
                    <img className="card-img" src={item.imageUrl} alt="veg-momos" />
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
                        <button className="button btn-primary card-button" onClick={()=> {removeFromWishlist(item._id); addToCart(item, 'Added To Cart')}}>Move To Cart</button>
                    </div>
                </div>
            </div>
      )
    })}
    </div>
    </section>
  )
}

export default Wishlist
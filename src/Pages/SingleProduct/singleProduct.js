import React from 'react'
import './singleProduct.css'


const SingleProduct = ({item}) => {
    {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}
  return (

    <div className="card card-ecom mg-1-all" style={{marginTop: '1rem'}}>
                    <button class="btn secondary-text-btn-sm card-close"><i class="far fa-heart"></i></button>
                    <div className="card-img-cont">
                        <img className="card-img" src={item.imageUrl}
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
                            <button className="button btn-primary card-button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
  )
}

export default SingleProduct
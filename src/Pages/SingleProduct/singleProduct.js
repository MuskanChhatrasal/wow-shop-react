import React from 'react'
import { useFilter } from '../../Context/context'
import './singleProduct.css'


const SingleProduct = ({item}) => {

    const { cartDispatch} = useFilter()

    {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}

   
  return (

            <div  className= {item.availableOrNot ? "card card-ecom mg-1-all":"card card-ecom mg-1-all not-available"} style={{marginTop: '1rem'}} >
                    {!item.availableOrNot && <h3 className='not-availableHead'>Not Available</h3>}
                    <button class="btn secondary-text-btn-sm card-close"><i class="far fa-heart"></i></button>
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
                            <button className= {item.availableOrNot ? "button btn-primary card-button addToCart-btn" : "button btn-primary card-button btn-disabled"}  onClick={()=>cartDispatch({type: 'ADD_TO_CART', payload: item})}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
  )
}

export default SingleProduct
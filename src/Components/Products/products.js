import React, {useReducer} from 'react'
import './products.css'
import { products } from '../../backend/db/products'


let exludeFlag = true;
const reducer = (state, action) =>{
  switch(action.type){
    case 'EXCLUDE_NOT_AVAILABLE':
      return {state, filteredProducts: excludeNotAvailable()}
    case 'INCLUDE_NOT_AVAILABLE':
      return {state, filteredProducts: includeNotAvailable()}
  }
}


const excludeNotAvailable = () =>{
  exludeFlag = false;
  let updatedList;
  updatedList = products.filter((item)=>item.availableOrNot);
  return updatedList;
}

const includeNotAvailable = () =>{
   exludeFlag = true;
   let updatedList;
   updatedList = products;
   return updatedList;
}

const Products = () => {
 
  const [state, dispatch] = useReducer(reducer, {filteredProducts: []})
 
  

  return (
    <div>
      <section className="main-container">
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
              <label  className="form-label"><h2>Price: </h2></label>
              <br />

              {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY  --> */}
             <input type="range" min="1" max="100" value="50" style={{width: '20rem'}} />
            </span>
            <span>
                <label>
                  <input type="radio" name="group1" /> <h3>LOW TO HIGH</h3>
                </label>
            </span>
            <span>
                <label>
                   <input type="radio" name="group1" /> 
                   <h3>HIGH TO LOW</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1" 
                  onChange={()=>exludeFlag ? dispatch({type: 'EXCLUDE_NOT_AVAILABLE'}):dispatch({type: 'INCLUDE_NOT_AVAILABLE'})}/> 
                  <h3>Exclude Not Available</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1" /> <h3>Item With Offers Only</h3>
                </label>
            </span>
            <span>
               <label style={{fontSize: '1.8rem'}}>Category: </label>
                  <select style={{marginLeft: '1rem', width: '20rem'}}>
                     <option value="Chineese">Chineese</option>
                     <option value="Spanish">Spanish</option>
                     <option value="Italian">Italian</option>
                     <option value="South-Indian">South-Indian</option>
                     <option value="North-Italian">North-Italian</option>
                  </select>
            </span>
            <label>
                    <h3 className="filter-rating">Rating: </h3>
                    <div className="filter-stars">
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
            </label>
            <button className="btn filter-btn">Clear Filters</button>
        </div>

        <section className="categories" id="categories">
    
        
            <div className="box-container">
                
                {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}
                {exludeFlag ? products.map((item)=>{
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
                }) : state.filteredProducts.map((item)=>{
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
                })}

        
               

                
            </div>
        
        </section>
        
        {/* <!-- categories section ends --> */}

    </section>
    </div>
  )
}

export default Products
import React from 'react'
import './products.css'
import { products } from '../../backend/db/products'

const Products = () => {
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
                  <input type="radio" name="group1" /> <h3>Ascending</h3>
                </label>
            </span>
            <span>
                <label>
                   <input type="radio" name="group1" /> 
                   <h3>Descending</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1" /> <h3>Include Out of Stock</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1" /> <h3>Fast Delivery Only</h3>
                </label>
            </span>
            <span>
               <label style={{fontSize: '1.8rem'}}>Category: </label>
                  <select style={{marginLeft: '1rem', width: '10rem'}}>
                     <option value="Chineese">Chineese</option>
                     <option value="Indian">Indian</option>
                     <option value="Italian">Italian</option>
                     <option value="Indian">Indian</option>
                     <option value="Italian">Italian</option>
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
                {products.map((item)=>{
                  return (
                    <div className="card card-ecom mg-1-all">
                    <div className="card-img-cont">
                        <img className="card-img" src={item.imageUrl}
                            alt="veg-momos" />
                    </div>
                    <div className="card-badge">OFFER</div>
                    <div className="card-body">
                        <div className="card-header">
                            <h6 className="card-title">{item.title}</h6>
                            <p className="card-desc">{item.categoryName}</p>
                            <div className="card-price">
                                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.{item.price}</span>
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
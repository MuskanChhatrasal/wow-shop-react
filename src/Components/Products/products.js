import React, {useReducer} from 'react'
import './products.css'
import { products } from '../../backend/db/products'
// import Rating from '../Rating/rating';

const filterReducer = (state, action) =>{
  switch(action.type){
    case 'EXCLUDE_NOT_AVAILABLE':
      return {...state, excludeNotAvailable: !state.excludeNotAvailable}
    case 'ONLY_ITEMS_WITH_OFFER':
      return {...state, offerItems: !state.offerItems}
    case 'CATEGORY':
      console.log(action.payload)
      return {...state, byCategory: action.payload}
    case 'SORT_BY_PRICE':
      return {...state, sort: action.payload}
    case 'SORT_BY_PRICE_RANGE':
      return {...state, byPrice: action.payload}
    // case 'FILTER_BY_RATING':
    //   return {...state, byRating: action.payload}

    case 'CLEAR_ALL_FILTERS': 
      return {excludeNotAvailable: false, offerItems: false, byRating: 0, byCategory: '', byPrice: 0, sort: ''}
  }
}


const Products = () => {

 const [filterState, filterDispatch] = useReducer(filterReducer, {excludeNotAvailable: false, offerItems: false, byRating: 0, byCategory: '', byPrice: 0, sort: ''})

 
const updatedProducts = () => {
  let updatedProductList = products;

  if(filterState.excludeNotAvailable){
    updatedProductList = updatedProductList.filter((item)=> item.availableOrNot)
    console.log(updatedProductList)
  }

  if(filterState.offerItems){
    updatedProductList = updatedProductList.filter((item)=>item.offer)
    console.log(updatedProductList)
  }

  if(filterState.byCategory){
    if(filterState.byCategory==='All'){
      updatedProductList = products
    }else{
      updatedProductList = updatedProductList.filter((item)=>item.categoryName === filterState.byCategory)
      console.log(updatedProductList)
    }
  }

  if(filterState.byPrice){
    if(filterState.byPrice==='All'){
      updatedProductList=products
    }else if(filterState.byPrice==="Above 50 Below 100"){
      updatedProductList = updatedProductList.filter((item)=>item.priceNew >= 50 &&  item.priceNew < 100)
    }else if(filterState.byPrice==="Above 100 Below 200"){
      updatedProductList = updatedProductList.filter((item)=>item.priceNew >= 100 &&  item.priceNew < 200)
    }else if(filterState.byPrice==="Above 200 Below 300"){
      updatedProductList = updatedProductList.filter((item)=>item.priceNew >= 200 &&  item.priceNew < 300)
    }
  }

  if(filterState.sort){
    updatedProductList = updatedProductList.sort((a,b) =>
      filterState.sort === 'lowToHigh' ? a.priceNew - b.priceNew : b.priceNew - a.priceNew
    )
    console.log(updatedProductList)
  }
  return updatedProductList;
}


  return (
    <div>
      <section className="main-container">
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
               <label style={{fontSize: '1.8rem'}}>Price: </label>
                  <select style={{marginLeft: '1rem', width: '20rem'}} 
                  onChange={(e)=>filterDispatch({type: 'SORT_BY_PRICE_RANGE', payload: e.target.value})}>
                     <option value="All">All</option>
                     <option value="Above 50 Below 100">Above 50 Below 100</option>
                     <option value="Above 100 Below 200">Above 100 Below 200</option>
                     <option value="Above 200 Below 300">Above 200 Below 300</option>
                  </select>
            </span>
            <span>
                <label>
                  <input type="radio" name="group1" onChange={()=>filterDispatch({type: 'SORT_BY_PRICE', payload: 'lowToHigh'})} 
                  checked={filterState.sort==='lowToHigh'?true:false} /> <h3>LOW TO HIGH</h3>
                </label>
            </span>
            <span>
                <label>
                   <input type="radio" name="group1" onChange={()=>filterDispatch({type: 'SORT_BY_PRICE', payload: 'highToLow'})} 
                   checked={filterState.sort==='highToLow' ? true:false} /> 
                   <h3>HIGH TO LOW</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1"  onChange={()=>filterDispatch({type: 'EXCLUDE_NOT_AVAILABLE'})} checked={filterState.excludeNotAvailable} /> 
                  <h3>Exclude Not Available</h3>
                </label>
            </span>
            <span>
                <label>
                  <input type="checkbox" name="group1" onChange={()=>filterDispatch({type: 'ONLY_ITEMS_WITH_OFFER'})} checked={filterState.offerItems} /> <h3>Item With Offers Only</h3>
                </label>
            </span>
            <span>
               <label style={{fontSize: '1.8rem'}}>Category: </label>
                  <select style={{marginLeft: '1rem', width: '20rem'}} onChange={(e)=>filterDispatch({type: 'CATEGORY', payload: e.target.value})}>
                     <option value="All">All</option>
                     <option value="Chineese">Chineese</option>
                     <option value="Spanish">Spanish</option>
                     <option value="Italian">Italian</option>
                     <option value="South-Indian">South-Indian</option>
                     <option value="North-Indian">North-Indian</option>
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
                        {/* <Rating rating={filterState.byRating} onClick={(i) => filterDispatch({type: 'FILTER_BY_RATING', payload: i+1})}  style={{cursor: 'pointer'}} /> */}
                    </div>
            </label>
            <button className="btn filter-btn" onClick={()=>filterDispatch({type: 'CLEAR_ALL_FILTERS'})}>Clear Filters</button>
        </div>

        <section className="categories" id="categories">
    
        
            <div className="box-container">
                
                {/* <!-- IMPORTED FROM MY COMPONENT LIBRARY --> */}
                {updatedProducts().map((item)=>{
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
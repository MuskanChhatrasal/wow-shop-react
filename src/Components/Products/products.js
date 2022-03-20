import React from 'react'
import './products.css'
import { products } from '../../backend/db/products'
import { useFilter } from '../../Context/context'
import Filter from '../../Pages/filter/filter'
// import Rating from '../Rating/rating';
import SingleProduct from '../../Pages/SingleProduct/singleProduct'


const Products = () => {

const {filterState} = useFilter()

 
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
  if(filterState.byRating){
    if(filterState.byRating === '4StarAndAbove'){
      updatedProductList = updatedProductList.filter((item)=>item.rating>=4)
    }else if(filterState.byRating === '3StarAndAbove'){
      updatedProductList = updatedProductList.filter((item)=>item.rating>=3)
    }else if(filterState.byRating === '2StarAndAbove'){
      updatedProductList = updatedProductList.filter((item)=>item.rating>=2)
    }else{
      updatedProductList = updatedProductList.filter((item)=>item.rating>=1)
    }
  }
  return updatedProductList;
}


  return (
    <div>
      <section className="main-container">
        <Filter />

        <section className="categories" id="categories">
            <div className="box-container">
                {updatedProducts().map((item)=>{
                  return (
                    <SingleProduct item={item}/>
                  )
                })}   
            </div>
        
        </section>
      </section>
    </div>
  )
}

export default Products
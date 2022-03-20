import React from 'react'
import { useFilter } from '../../Context/context'
import './filter.css'


const Filter = () => {
  
  const {filterState, filterDispatch} = useFilter();

  return (
   <div className="filters">
            <span className="title">Filter Products</span>
            <span>
               <label style={{fontSize: '1.8rem'}}>Price: </label>
                  <select style={{marginLeft: '1rem', width: '15rem'}} 
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
                  <select style={{marginLeft: '1rem', width: '15rem'}} onChange={(e)=>filterDispatch({type: 'CATEGORY', payload: e.target.value})}>
                     <option value="All">All</option>
                     <option value="Chineese">Chineese</option>
                     <option value="Spanish">Spanish</option>
                     <option value="Italian">Italian</option>
                     <option value="South-Indian">South-Indian</option>
                     <option value="North-Indian">North-Indian</option>
                  </select>
            </span>
            <label>
                    <h4 className="filter-heading">Ratings </h4>
                    <span>
                      <label>
                        <input type="radio" name="group2" onChange={()=>filterDispatch({type: 'FILTER_BY_RATING', payload: '4StarAndAbove'})} 
                        checked={filterState.byRating==='4StarAndAbove' ? true:false} /> 
                        <p style={{marginLeft: '2rem', marginTop: '-2.3rem'}} >4 Star and Above</p>
                      </label>
                    </span>
                    <span>
                      <label>
                        <input type="radio" name="group2" onChange={()=>filterDispatch({type: 'FILTER_BY_RATING', payload: '3StarAndAbove'})} 
                        checked={filterState.byRating === '3StarAndAbove' ? true:false} /> 
                        <p style={{marginLeft: '2rem', marginTop: '-2.3rem'}}>3 Star and Above</p>
                      </label>
                    </span>
                    <span>
                      <label>
                        <input type="radio" name="group2" onChange={()=>filterDispatch({type: 'FILTER_BY_RATING', payload: '2StarAndAbove'})} 
                        checked={filterState.byRating === '2StarAndAbove' ? true:false} /> 
                        <p style={{marginLeft: '2rem', marginTop: '-2.3rem'}}>2 Star and Above</p>
                      </label>
                    </span>
                    <span>
                      <label>
                        <input type="radio" name="group2" onChange={()=>filterDispatch({type: 'FILTER_BY_RATING', payload: '1StarAndAbove'})} 
                        checked={filterState.byRating === '1StarAndAbove' ? true:false} /> 
                        <p style={{marginLeft: '2rem', marginTop: '-2.3rem'}}>1 Star and Above</p>
                      </label>
                    </span>
            </label>
            <button className="btn filter-btn" onClick={()=>filterDispatch({type: 'CLEAR_ALL_FILTERS'})}>Clear Filters</button>
        </div>
  )
}

export default Filter

export const filterReducer = (state, action) =>{
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

export const cartReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
  }
}
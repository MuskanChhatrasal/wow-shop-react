import { createContext, useContext, useReducer } from "react";
import { products } from "../backend/db/products";
import { filterReducer } from "./reducer";
import { cartReducer } from "./reducer";

const Context = createContext();

const Provider = ({children}) =>{
    
    const [filterState, filterDispatch] = useReducer(filterReducer, {excludeNotAvailable: false, offerItems: false, byRating: '', byCategory: '', byPrice: 0, sort: ''})
    const [cartState, cartDispatch] = useReducer(cartReducer, {products: products, cart: []})

    return(
        <Context.Provider value={{filterState, filterDispatch, cartState, cartDispatch}}>
            {children}
        </Context.Provider>
    )
}

const useFilter = () => useContext(Context);

export {Provider, useFilter}
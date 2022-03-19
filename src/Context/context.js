import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./reducer";

const FilterContext = createContext();

const FilterProvider = ({children}) =>{
    
    const [filterState, filterDispatch] = useReducer(filterReducer, {excludeNotAvailable: false, offerItems: false, byRating: 0, byCategory: '', byPrice: 0, sort: ''})

    return(
        <FilterContext.Provider value={{filterState, filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext);

export {FilterProvider, useFilter}
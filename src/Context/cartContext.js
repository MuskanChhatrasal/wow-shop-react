import axios from "axios";
import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext/authContext";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const {authDispatch} = useAuth();

    const config = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }

    const addToCart = async (item, toastText) =>{
      try {
          const response = await axios.post("/api/user/cart",{
              product: item
          }, config
        )
          if(response.status === 201){
              authDispatch({type: 'ADD_TO_CART', payload: {toastMessage: toastText, data:response.data.cart}})
          }
      } catch (error) {
          console.log(error)
      }
    }
    return (
        <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider}
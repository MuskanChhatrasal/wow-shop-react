import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./authReducer";


const initialData = {
    wishlist: [],
    cart: [],
    toastData: {
        status: "",
        display: false,
        data: ""
    },
    loggedIn: false,
    testLogin: false,
    userName: "Profile",
    userId: "",
}

const AuthContext = createContext(initialData);

const AuthProvider = ({children}) =>{

    const [authState, authDispatch] = useReducer(authReducer, initialData);

    const signup = async (userDetails) =>{
        console.log('hello')
      try {
          const response = await axios.post('/api/auth/signup', {
              firstName: userDetails.firstName,
              lastName: userDetails.lastName,
              email: userDetails.email,
              password: userDetails.password
          })
          console.log(response)
          localStorage.setItem('token', response.data.encodedToken)
          authDispatch({type: 'SUCCESS_TOAST', payload: {name: response.data.createdUser.firstName, toastMessage: 'Signed Up', id: response.data.createdUser._id}})
      } catch (error) {
          console.log(error)
      }
    }

    const login = async (userDetails) =>{
        try {
            const response = await axios.post('/api/auth/login',{
                email: userDetails.email,
                password: userDetails.password
            })
            
            localStorage.setItem('token', response.data.encodedToken)
            authReducer({type: 'SUCCESS_TOAST', payload: {name: response.data.foundUser.firstName, toastMessage: 'Loged In', id: response.data.foundUser._id}})
        } catch (error) {
            console.log(error)
        }
    }

    const testLogin = async () =>{
        console.log('hello')
        try {
            const response = await axios.post('/api/auth/login',{
                email: 'test123@gmail.com',
                password: 'testLogin@123'
            })
            console.log(response)
            authDispatch({type: 'TEST_TOAST', payload: {name: response.data.foundUser.firstName, toastMessage: 'Logid In', id: response.data.foundUser._id}})
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () =>{
        localStorage.clear();
        authDispatch({type: 'LOGOUT', payload: {toastMessage: 'Logged Out', id: ''}})
    }
    return (
        <AuthContext.Provider value={{authState, authDispatch, signup, login, testLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}
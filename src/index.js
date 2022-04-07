import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "./Context/context";
import { AuthProvider } from "./Context/AuthContext/authContext";
import { CartProvider } from "./Context/cartContext";
import { WishlistProvider } from "./Context/wishlistContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <CartProvider>
  <WishlistProvider>
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </WishlistProvider>
  </CartProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

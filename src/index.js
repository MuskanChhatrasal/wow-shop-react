import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "./Context/context";
import { AuthProvider } from "./Context/AuthContext/authContext";
import { CartProvider } from "./Context/cartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <CartProvider>
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </CartProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

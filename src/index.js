import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "./Context/context";
import { AuthProvider } from "./Context/AuthContext/authContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

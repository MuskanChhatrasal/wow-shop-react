import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from '../src/Components/Navbar/navbar'
import Home from '../src/Components/Home/home'
import Products from '../src/Components/Products/products'
import Footer from '../src/Components/Footer/footer'
import Cart from '../src/Components/Cart/cart'
import Wishlist from '../src/Components/Wishlist/wishlist'
import Mockman from "mockman-js";
import Login from "./Components/Authentication/login";
import Signup from "./Components/Authentication/signup";
import RistrictAuth from "./Pages/ReqRisAuth/RistrictAuth";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/mockman" element={<Mockman />} />
      <Route element={<RistrictAuth />}>
        <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;

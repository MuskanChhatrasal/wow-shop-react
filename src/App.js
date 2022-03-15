import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from '../src/Components/Navbar/navbar'
import Home from '../src/Components/Home/home'
import Products from '../src/Components/Products/products'
import Footer from '../src/Components/Footer/footer'
import Cart from '../src/Components/Cart/cart'
import Wishlist from '../src/Components/Wishlist/wishlist'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;

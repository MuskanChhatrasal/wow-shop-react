import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/authContext";

const CartSummary = () => {
  const [totalItem, setTotalItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const {
    authState: { cart },
  } = useAuth();

  useEffect(() => {
    setTotalItem(totalItemQty(cart));
  }, [cart]);

  useEffect(() => {
    setTotalPrice(totalItemPrice(cart));
  }, [cart]);

  const totalItemQty = (cart) => {
    const totalQtyReducer = (acc, curr) => (acc += curr.qty);
    return cart.length === 0 ? 0 : cart.reduce(totalQtyReducer, 0);
  };

  const totalItemPrice = (cart) => {
    const totalPriceReducer = (acc, curr) => (acc += curr.priceNew * curr.qty);
    return cart.length === 0 ? 0 : cart.reduce(totalPriceReducer, 0);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        currency: "INR",
        amount: totalPrice * 100,
        name: "Wow Shop",
        description: "Thanks for shopping with us!",
        prefill: {
          name: "Mussu",
          email: "mussu@gmail.com",
          contact: "1234567890",
        },
        handler: function (response) {
          alert(
            `Payment Successful Payment Id ${response.razorpay_payment_id}`
          );
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };
  const razorpayHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.log("you are offline");
      return;
    }
  };

  return (
    <div className="filters summary" style={{ marginRight: "2rem" }}>
      <span style={{ fontSize: "2rem" }}>Subtotal ({totalItem}) items</span>
      <span style={{ fontWeight: "700", fontSize: "2rem" }}>
        Total: ₹{totalPrice}
      </span>
      <button type="button" className="checkout-btn" onClick={razorpayHandler}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;

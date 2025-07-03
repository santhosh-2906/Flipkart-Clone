import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  // ✅ This state holds all cart items:
  const [cartItems, setCartItems] = useState([]);

  // ✅ Function to add item:
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} />}
        />
      </Routes>
    </>
  );
}

export default App;

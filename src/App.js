import React, { useState } from 'react';
import ProductPage from './Components/ProductPages/ProductPage';
import Cart from './Components/CartPage/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app-container">
      <ProductPage onAddToCart={handleAddToCart} />
      <Cart
        items={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        totalAmount={totalAmount}
      />
    </div>
  );
}

export default App;

import React from 'react';
import './Cart.css';

const Cart = ({ items, onRemoveFromCart, totalAmount }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <span>Jimmy Sullivan</span>
        <button>Edit</button>
      </div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Subtotal: ${totalAmount.toFixed(2)}</h3>
        <h3>Discount (10%): ${(totalAmount * 0.1).toFixed(2)}</h3>
        <h3>Gratuity: $4.00</h3>
        <h3>Total: ${(totalAmount - totalAmount * 0.1 + 4).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

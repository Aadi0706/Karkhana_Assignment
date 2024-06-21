import React from 'react';
import './ProductPage.css';

const products = [
  { id: 1, name: 'ORI GIMBER 700ml', price: 24.95 },
  { id: 2, name: 'GIMBER N°2 700 ml', price: 25.85 },
  { id: 3, name: 'SML GIMBER 500 ml', price: 20.45 },
  { id: 4, name: 'GIMBER N°2 500 ml', price: 26.00 },
  { id: 5, name: 'DUO-PACK: GIMBER...', price: 52.80 },
  { id: 6, name: 'S-SML GIMBER 50...', price: 20.25 },
  { id: 7, name: 'Shop COOK & GO...', price: 32.50 },
];

const ProductPage = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      <div className="search-bar">
        <input type="text" placeholder="Search all products here..." />
        <button>Search</button>
      </div>
      <div className="category-buttons">
        <button className="category-button">Ice Coffee</button>
        <button className="category-button">Hot Coffee</button>
        <button className="category-button">Artisan Tea</button>
        <button className="category-button">Ice Mojito</button>
        <button className="category-button">Beverage</button>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

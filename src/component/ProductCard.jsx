import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
      <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={handleOrderClick}>
          Заказать
        </button>
      </div>
    </div>
  );
};




export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

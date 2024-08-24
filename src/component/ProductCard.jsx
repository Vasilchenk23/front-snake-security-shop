import React from 'react';

const products = [
  { id: 1, name: 'Продукт A', description: 'Запчасть для пк', price: 299.99, image: 'placeholder.png' },
  { id: 2, name: 'Продукт B', description: 'Запчасть для пк', price: 199.99, image: 'placeholder.png' },
  { id: 4, name: 'Продукт D', description: 'Запчасть для пк', price: 349.99, image: 'placeholder.png' },
  { id: 5, name: 'Продукт E', description: 'Запчасть для пк', price: 399.99, image: 'placeholder.png' },
  { id: 6, name: 'Продукт F', description: 'Запчасть для пк', price: 499.99, image: 'placeholder.png' },
  { id: 7, name: 'Продукт G', description: 'Запчасть для пк', price: 279.99, image: 'placeholder.png' },
  { id: 8, name: 'Продукт H', description: 'Запчасть для пк', price: 159.99, image: 'placeholder.png' },
  { id: 9, name: 'Продукт I', description: 'Запчасть для пк', price: 229.99, image: 'placeholder.png' },
  { id: 10, name: 'Продукт J', description: 'Запчасть для пк', price: 129.99, image: 'placeholder.png' },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Заказать</button>
      </div>
    </div>
  );
};

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


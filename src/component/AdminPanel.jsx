import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', {
        name,
        description,
        price,
      });
      setName('');
      setDescription('');
      setPrice('');
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts(); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2 className="title">Add New Product</h2>
      <form onSubmit={handleAddProduct} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
      
      <h2 className="title">Product List</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


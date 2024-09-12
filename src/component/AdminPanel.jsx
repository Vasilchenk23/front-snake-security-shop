import React, { useState } from 'react'

export const AdminPanel = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        setNewProduct({
          name: '',
          description: '',
          price: '',
        });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="admin-panel">
      <h2 className="title">Add New Product</h2>
      <div className="form-container">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="input-field"
        />
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="input-field"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="input-field"
        />
        <button onClick={handleAddProduct} className="add-button">
          Add Product
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductAddComp = () => {
  const nav = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    pname: '',
    price: '',
    brand: '',
    quantity: '',
    description: '',
    imageUrl: ''
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const addProduct = (event) => {
    event.preventDefault();

    console.log(product);

    // Send product data to the backend (JSON Server)
    axios.post('http://localhost:5000/products', product)
      .then(() => {
        window.alert('Product added successfully');
        nav('//MainDashBoard/ProductDashComp');  // Navigate back to the products page
      })
      .catch((error) => {
        console.error('Failed to add product:', error);
        window.alert('Failed to add product');
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Jewelry Product</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={addProduct}>
            
            {/* Product ID */}
            <label className="form-label mt-2">Product ID</label>
            <input type="text" name="id" onChange={inputChangeHandler} value={product.id} className="form-control" placeholder="Enter Product ID"
              required
            />

            {/* Product Name */}
            <label className="form-label mt-2">Product Name</label>
            <input
              type="text"
              name="pname"
              onChange={inputChangeHandler}
              value={product.pname}
              className="form-control"
              placeholder="Enter Product Name"
              required
            />

            {/* Price */}
            <label className="form-label mt-2">Price</label>
            <input
              type="number"
              name="price"
              onChange={inputChangeHandler}
              value={product.price}
              className="form-control"
              placeholder="Enter Price"
              required
            />

            {/* Brand */}
            <label className="form-label mt-2">Brand</label>
            <input
              type="text"
              name="brand"
              onChange={inputChangeHandler}
              value={product.brand}
              className="form-control"
              placeholder="Enter Brand"
            />

            {/* Quantity */}
            <label className="form-label mt-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              onChange={inputChangeHandler}
              value={product.quantity}
              className="form-control"
              placeholder="Enter Quantity"
              required
            />

            {/* Description */}
            <label className="form-label mt-2">Description</label>
            <textarea
              name="description"
              rows="4"
              onChange={inputChangeHandler}
              value={product.description}
              className="form-control"
              placeholder="Enter Product Description"
            ></textarea>

            {/* Image URL */}
            <label className="form-label mt-2">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              onChange={inputChangeHandler}
              value={product.imageUrl}
              className="form-control"
              placeholder="Enter Image URL"
            />

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Add Product
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAddComp;

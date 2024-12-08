import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProductComp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: '',
    pname: '',
    price: '',
    Brand: '',
    Quantity: ''
  });

  useEffect(() => {
    // Fetch product data by ID
    axios.get(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch product:', error);
      });
  }, [id]);

  // Handle input changes
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  // Submit form to update product data
  const updateProduct = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/products/${id}`, product)
      .then(() => {
        window.alert('Product updated successfully');
        navigate('/ProductDashComp');
        // http://localhost:3000/ProductDashComp
      })
      .catch((error) => {
        console.error('Failed to update product:', error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form onSubmit={updateProduct}>
            <label className="form-label">Product ID</label>
            <input
              type="text"
              name="id"
              onChange={inputChangeHandler}
              value={product.id}
              className="form-control"
              disabled
            />

            <label className="form-label mt-2">Product Name</label>
            <input
              type="text" name="pname" onChange={inputChangeHandler} value={product.pname}
              className="form-control"/>

            <label className="form-label mt-2">Product Price</label>
            <input
              type="number"
              name="price"
              onChange={inputChangeHandler}
              value={product.price}
              className="form-control"
            />

            <label className="form-label mt-2">Brand</label>
            <input
              type="text"
              name="Brand"
              onChange={inputChangeHandler}
              value={product.Brand}
              className="form-control"
            />

            <label className="form-label mt-2">Quantity</label>
            <input type="number" name="Quantity" onChange={inputChangeHandler} value={product.Quantity} className="form-control"
            />

            <button type="submit" className="btn btn-success mt-3">Update Product</button>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default EditProductComp;

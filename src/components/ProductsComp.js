// src/components/ProductsComp.js

import React from 'react';
import commonData from '../shared/constant/ConstantData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const ProductsComp = () => {
  const products = Object.values(commonData);

  return (
    <div className="container mt-4">
      <h2 style={{textAlign:"center",color:"purple"}}>Trendy Collections</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img 
                src={product} 
                alt={`Product ${index + 1}`} 
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComp;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductDashComp = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch Products
  const fetchData = () => {
    axios.get('http://localhost:5000/products')
      .then((result) => setProducts(result.data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete Product
  const actionDelete = (id) => {
    if (window.confirm(`Are you sure to delete product with ID: ${id}`)) {
      axios.delete(`http://localhost:5000/products/${id}`)
        .then(() => {
          window.alert('Product deleted successfully');
          fetchData();
        })
        .catch((error) => console.error('Error deleting product:', error));
    }
  };

  return (
    <div>
      <h2>Product Dashboard</h2>

      {/* Add Product Button */}
      <button
        className="btn btn-info btn-sm"
        onClick={() => navigate('/MainDashBoard/AddProductComp')}
      >
        <AddIcon />
        Add Product
      </button>

      {/* Product Table */}
      <table className="table table-hover table-bordered table-striped mt-4">
        <thead>
          <tr>
            <th>S.No</th>
            <th>PID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.pname}</td>
                <td>{product.Brand}</td>
                <td>{product.price}</td>
                <td>{product.Quantity}</td>
                <td>
                  {/* Edit Button */}
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() =>
                      navigate(`/MainDashBoard/EditProductComp/${product.id}`)
                    }>
                    <Link to={`/MainDashBoard/EditProductComp/${product.id}`}>
                             <EditIcon />
                    </Link>

                  </button>{" "}

                  {/* Delete Button */}
                  <button
                    className="btn btn-outline-danger btn-sm ml-2"
                    onClick={() => actionDelete(product.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDashComp;


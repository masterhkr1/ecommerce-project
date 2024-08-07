import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import './Products.css';

const ProductsList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const products = [
    { id: 1, name: 'Product 1', price: '$10', imageUrl: '/images/product1.jpg', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: '$20', imageUrl: '/images/product2.jpg', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', price: '$30', imageUrl: '/images/product3.jpg', description: 'Description for product 3' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
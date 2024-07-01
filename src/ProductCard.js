import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './store/actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();



  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-brand"><b>Brand:</b> {product.brand}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-category"><b>Rating:</b> {product.rating}</p>
        <div className="buy-container">
          <Link to={`/buy/${product.id}`} className="buy-button">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
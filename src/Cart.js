import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from './store/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.product.id} className="cart-item">
          <img src={item.product.thumbnail} alt={item.product.title} className="cart-item-thumbnail" />
          <div className="cart-item-details">
            <h3>{item.product.title}</h3>
            <p>Price: ${item.product.price}</p>
            <div className="quantity-control">
              <label htmlFor={`quantity-${item.product.id}`}>Quantity:</label>
              <select id={`quantity-${item.product.id}`} value={item.quantity} onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}>
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <button onClick={() => handleRemoveItem(item.product.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <p>Total Quantity: {calculateTotalQuantity()}</p>
        <p>Total Amount: ${calculateTotalAmount()}</p>
      </div>
      <div className="checkout-button">
        <button>Proceed to Checkout</button>
      </div>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default Cart;
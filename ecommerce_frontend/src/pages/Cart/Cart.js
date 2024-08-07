// src/pages/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id)); // Asumimos que se usa el id del item
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <button onClick={handleClearCart}>Clear Cart</button>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name} - {item.price}</span> {/* Mostrar precio también */}
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li> {/* Enlace al Carrito */}
          <li><Link to="/checkout">Checkout</Link></li> {/* Enlace a Checkout */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

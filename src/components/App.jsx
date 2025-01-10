// src/components/App.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import products from '../Data';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header cartCount={cart.length} />
      <div className="container my-4">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cart} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Header from './Header';
import products from '../Data';

function App() {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(item => item.id === product.id);
      if (productExists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setPopupMessage(`${product.name} has been added to the cart.`);
    setShowPopup(true);

    setTimeout(() => setShowPopup(false), 3000);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Function to update quantity
  const updateQuantity = (itemId, change) => {
    setCart((prevCart) => prevCart.map(item =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + change }
        : item
    ));
  };

  return (
    <Router>
      <div className="app-container">
        <Header cartCount={cart.reduce((count, item) => count + item.quantity, 0)} />
        <div className="content-container">
          <nav className="navbar">
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
          </nav>

          {showPopup && (
            <div className="popup">
              <p>{popupMessage}</p>
              <Link to="/cart" className="btn btn-primary">Go to Checkout</Link>
            </div>
          )}

          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

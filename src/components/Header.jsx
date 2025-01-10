// src/components/Header.jsx
import React from 'react';

function Header({ cartCount }) {
  return (
    <header className="bg-dark text-white p-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1>My E-commerce Site</h1>
        <div>
          <span>Cart ({cartCount})</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

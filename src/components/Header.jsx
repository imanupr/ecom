import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="d-flex justify-content-between align-items-center py-3">
      <h1>My Store</h1>
      <div>
        <Link to="/cart" className="btn btn-secondary">
          Cart ({cartCount})
        </Link>
      </div>
    </header>
  );
}

export default Header;

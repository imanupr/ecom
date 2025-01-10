// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="mt-4">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${totalPrice}</strong></p>
        </div>
      )}
    </div>
  );
}

export default Cart;

import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleRemove = (itemId) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this item from the cart?");
    if (confirmRemove) {
      removeFromCart(itemId);
    }
  };

  const handleQuantityChange = (itemId, operation) => {
    if (operation === 'increase') {
      updateQuantity(itemId, 1); // Increase quantity by 1
    } else if (operation === 'decrease') {
      updateQuantity(itemId, -1); // Decrease quantity by 1
    }
  };

  return (
    <div className="mt-4">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="cart-item-text">
                  {item.name} - ${item.price} x {item.quantity}
                </span>
                
                {/* Quantity control buttons */}
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                >
                  +
                </button>

                <button 
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
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

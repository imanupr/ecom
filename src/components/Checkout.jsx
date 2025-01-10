// src/components/Checkout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cartItems, totalPrice, handleCheckout }) {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Proceed with the checkout by calling Stripe payment method
    handleCheckout();
    navigate('/payment'); // Redirect to payment page or show success
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <h4>Your Order:</h4>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <h5>Total: ${totalPrice}</h5>
        <button className="btn btn-primary" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Checkout;

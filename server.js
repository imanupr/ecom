// server.js
require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:3000'; // Change this to your domain

// Create checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { cartItems, totalPrice } = req.body;

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Stripe expects price in cents
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.json({ id: session.id });
  } catch (err) {
    console.error('Error creating Stripe session:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start Express server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

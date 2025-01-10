import React from 'react';
import ProductCard from './ProductCard'; // Assuming the card is in this file

function ProductList({ products, addToCart }) {
  return (
    <div className="product-card-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;

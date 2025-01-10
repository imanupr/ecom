import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const fallbackImage = 'https://via.placeholder.com/150'; // Fallback image

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  const formattedPrice = product.price && !isNaN(product.price) ? product.price.toFixed(2) : '0.00';

  return (
    <div className="card">
      <img 
        src={product.image || fallbackImage} 
        alt={`Image of ${product.name}`} 
        className="card-img-top" 
        onError={handleImageError}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>${formattedPrice}</strong>
        </p>
        <button 
          onClick={() => addToCart(product)} 
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

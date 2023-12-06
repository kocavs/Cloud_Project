import React from 'react';
import './RestaurantCard.css';

function RestaurantCard({ restaurant, onSelect, isSelected }) {
  // You can format the rating to your preference, e.g., showing stars or just the number
  const renderRating = (rating) => {
    return rating ? `${rating} / 5.0` : 'Not Rated';
  };

  return (
    <div 
      className={`restaurant-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onSelect(restaurant)}
    >
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-category">{restaurant.category}</p>
      <p className="restaurant-city">{restaurant.full_address}</p>
      <p className="restaurant-price-range">{restaurant.price_range || 'N/A'}</p>
      <p className="restaurant-rating">{renderRating(restaurant.rating)}</p>
    </div>
  );
}

export default RestaurantCard;


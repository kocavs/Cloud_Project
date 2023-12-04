import React from 'react';
import './RestaurantCard.css';

function RestaurantCard({ restaurant, onSelect, isSelected }) {
  return (
    <div 
      className={`restaurant-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onSelect(restaurant)}
    >
      <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
      <h3 className="restaurant-name">{restaurant.name}</h3>
      <p className="restaurant-city">{restaurant.city}</p>
      {/* Include the rating component here */}
    </div>
  );
}

export default RestaurantCard;
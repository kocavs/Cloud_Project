// components/RestaurantDetail.js
import React from 'react';
import './RestaurantDetail.css';

function RestaurantDetail({ restaurant }) {
  return (
    <div className="restaurant-detail">
      <h2 className="restaurant-title">{restaurant.name} ({restaurant.location})</h2>
      <p className="restaurant-rating">{/* Render the star ratings here */}</p>
      <p className="restaurant-description">{restaurant.description}</p>
      {/* Include the reviews and other details here */}
      <button className="order-button">WANT TO ORDER?</button>
    </div>
  );
}

export default RestaurantDetail;

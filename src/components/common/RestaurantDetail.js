import React from 'react';
import './RestaurantDetail.css';

function RestaurantDetail({ restaurant }) {
  return (
    <div className="restaurant-detail">
      <h2 className="restaurant-title">{restaurant.name}</h2>
      <p className="restaurant-location">{restaurant.city}</p>

      {/* Render menu items here */}
      <div className="restaurant-menu">
        <h3>Menu</h3>
        {restaurant.menu && restaurant.menu.length > 0 ? (
          <ul>
            {restaurant.menu.map((item, index) => (
              <li key={index} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No menu available.</p>
        )}
      </div>
      
      <button className="order-button">Want To Order?</button>
    </div>
  );
}

export default RestaurantDetail;

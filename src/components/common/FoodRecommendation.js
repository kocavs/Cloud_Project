// components/FoodRecommendation.js
import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard'; // Component for individual restaurant cards
import RestaurantDetail from './RestaurantDetail'; // Component for showing the selected restaurant details
import './FoodRecommendation.css';
import apigClient from '../../api/apigClient';

function FoodRecommendation({ recommendations  = []}) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  useEffect(() => {
    var params = {};
    var body = {};
    var additionalParams = {};

    apigClient.recommendationsGet(params, body, additionalParams)
      .then(response => {
        setRecommendations(response.data); // assuming the response data contains the recommendations
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="food-recommendation">
      <div className="food-recommendation-header">
        <h2>Food Recommendations</h2>
      </div>
      <div className="restaurant-cards">
        {recommendations.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onSelect={handleSelectRestaurant}
            isSelected={selectedRestaurant && selectedRestaurant.id === restaurant.id}
          />
        ))}
      </div>
      {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
    </div>
  );
}

export default FoodRecommendation;

// pages/HomePage.js
import React, { useState, useEffect }  from 'react';
import ChatBox from '../common/ChatBox';
import './HomePage.css'
import FoodRecommendation from '../common/FoodRecommendation';

function HomePage() {

  return (
    <div className="home-page">
      <ChatBox className="chat-area" />
      <FoodRecommendation recommendationsInput={[]} className="food-recommendation" />
      {/* Add other components specific to the homepage here */}
    </div>
  );
}

export default HomePage;

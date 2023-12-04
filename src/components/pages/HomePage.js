// pages/HomePage.js
import React, { useState, useEffect }  from 'react';
import ChatBox from '../common/ChatBox';
import './HomePage.css'
import FoodRecommendation from '../common/FoodRecommendation';

const dummyRecommendations = [
  {
    id: 1,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 5.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  },
  {
    id: 2,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 4.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  },
  {
    id: 3,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 3.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  },
  {
    id: 4,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 3.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  },
  {
    id: 5,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 3.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  },
  {
    id: 6,
    name: 'Lanespan Pizza & Pub',
    city: 'New York, NY',
    imageUrl: '../../assets/img/rectangle-4065.png', // Replace with actual image path or URL
    rating: 3.0,
    description: 'This restaurant has amazing pizza! Loved the ambiance as well.',
    reviews: [
      { author: 'John Doe', text: 'Great place to enjoy with family!' },
    ],
  }
  // ... more restaurant objects
];

function HomePage() {

  return (
    <div className="home-page">
      <ChatBox className="chat-area" />
      <FoodRecommendation recommendationsInput={dummyRecommendations} className="food-recommendation" />
      {/* Add other components specific to the homepage here */}
    </div>
  );
}

export default HomePage;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import HomePage from './components/pages/HomePage';
// import OtherPage1 from './pages/OtherPage1';
// import other pages similarly
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/orders" element={<OrdersPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

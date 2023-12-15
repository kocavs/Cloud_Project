// App.js
import React,  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import { jwtDecode } from 'jwt-decode';

import Sidebar from './components/common/Sidebar';
import HomePage from './components/pages/HomePage';
import OrderPage from './components/pages/OrderPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuthentication = () => {
      try {
        const storedIdToken = localStorage.getItem('idToken');
        const storedAccessToken = localStorage.getItem('accessToken');
  
        if (storedIdToken && storedAccessToken) {
          const decodedToken = jwtDecode(storedIdToken);
          setIsAuthenticated(true);
          setUserInfo(decodedToken);
        } else {
          const hash = window.location.hash.substring(1);
          const result = hash.split('&').reduce((res, item) => {
            const parts = item.split('=');
            res[parts[0]] = parts[1];
            return res;
          }, {});
  
          if (result.id_token && result.access_token) {
            localStorage.setItem('idToken', result.id_token);
            localStorage.setItem('accessToken', result.access_token);
            const decodedToken = jwtDecode(result.id_token);
            setIsAuthenticated(true);
            setUserInfo(decodedToken);
          } else {
            redirectToLogin();
          }
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    checkAuthentication();
  }, []);

  const redirectToLogin = () => {
    window.location.href = 'https://eat1.auth.us-east-1.amazoncognito.com/login?client_id=1nlp003mdt7kcqmmtc8rvqibv7&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fkocavs.github.io%2FCloud_Project%2F';
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} redirectToLogin={redirectToLogin} userInfo={userInfo} setUserInfo={setUserInfo}/>
        <Routes>
          {/* <Route path="/Cloud_Project/login" element={<LoginPage redirectToLogin={redirectToLogin} />} />
          <Route path="/Cloud_Project/" element={isAuthenticated ? <HomePage /> : <Navigate replace to="/Cloud_Project/login" />} />
          <Route path="/Cloud_Project/orders" element={isAuthenticated ? <OrderPage /> : <Navigate replace to="/Cloud_Project/login" />} /> */}
          
          <Route path="/Cloud_Project/" element={<HomePage userInfo={userInfo}/> } />
          <Route path="/Cloud_Project/orders" element={<OrderPage userInfo={userInfo}/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

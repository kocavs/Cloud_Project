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
    // Check if tokens are stored in localStorage
    const storedIdToken = localStorage.getItem('idToken');
    const storedAccessToken = localStorage.getItem('accessToken');
  
    if (storedIdToken && storedAccessToken) {
      // User is authenticated
      setIsAuthenticated(true);
      // Decode the ID token
      const decodedToken = jwtDecode(storedIdToken);
      setUserInfo(decodedToken);
    } else {
      // Extract tokens from URL and store in localStorage
      const hash = window.location.hash.substring(1);
      const result = hash.split('&').reduce(function (res, item) {
        const parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
      }, {});
  
      if (result.id_token && result.access_token) {
        localStorage.setItem('idToken', result.id_token);
        localStorage.setItem('accessToken', result.access_token);
        setIsAuthenticated(true);

        // Decode the ID token
        const decodedToken = jwtDecode(result.id_token);
        setUserInfo(decodedToken);
      }
    }
  }, []);

  const redirectToLogin = () => {
    window.location.href = 'https://eat1.auth.us-east-1.amazoncognito.com/login?client_id=1nlp003mdt7kcqmmtc8rvqibv7&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fkocavs.github.io%2FCloud_Project%2F';
  };

  return (
    <Router>
       <div className="app">
       <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} redirectToLogin={redirectToLogin} userInfo={userInfo} setUserInfo={setUserInfo}/>
         <Routes>
           <Route path="/Cloud_Project" element={<HomePage />} />
           <Route path="/Cloud_Project/orders" element={<OrderPage />} />
         </Routes>
       </div>
     </Router>
   );

  // return (
  // <Router>
  //   {isAuthenticated ? (
  //       // Routes for authenticated users
  //       <div className="app">
  //         <Sidebar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} redirectToLogin={redirectToLogin}/>
  //         <Routes>
  //           <Route path="/Cloud_Project" element={<HomePage />} />
  //           <Route path="/Cloud_Project/orders" element={<OrderPage />} />
  //         </Routes>
  //       </div>
  //     ) : (
  //     <Routes>
  //       <Route path="/Cloud_Project/Login" element={<LoginPage redirectToLogin={redirectToLogin} />} />
  //     </Routes>
  //   )}
  //   </Router>
  // );

  // return (
  //   <Router>
  //     <div className="app">
  //       <Sidebar />
  //       <Authenticator>
  //         <Routes>
  //           <Route path="/Cloud_Project" element={<HomePage />} />
  //           <Route path="/Cloud_Project/orders" element={<OrderPage />} />
  //         </Routes>
  //       </Authenticator>
  //     </div>
  //   </Router>
  // );
}

export default App;

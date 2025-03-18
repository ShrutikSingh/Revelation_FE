import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './config/config';

const ProtectedRoute = ({ children, Token }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (!Token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/api/auth/status`, {
          headers: { Authorization: `Bearer ${Token}` }
        });
        setIsAuthenticated(response.status === 200);
      } catch (error) {
        console.error('Auth error:', error);
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, [Token]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or your loading component
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
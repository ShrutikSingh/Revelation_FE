import React from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../config/config';
import "./Login.css";
// import "./css/Index.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (response) => {    
    try {
      const backendResponse = await axios.post(`${API_URL}/api/auth/google`, {
        token: response.credential, 
      });

      const token = backendResponse.data.token;
      localStorage.setItem("token", token);
      setToken(token); // Add this line to update the token state
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-container">
    <div className="login-card">
      <h2 className="login-title">Login with Google</h2>
      <GoogleLogin 
        onSuccess={handleGoogleLoginSuccess} 
        onError={() => console.error("Login Failed")}
        useOneTap={false}
      />
      <button className="login-button" onClick={() => navigate("/")}>Go to Home</button>
      <p className="text-red-400 font-serif pt-1">*IIEST students need to login through gsuit</p>
    </div>
  </div>
  );
};

export default Login;
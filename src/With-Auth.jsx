import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const checkAuthStatus = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/server/all", {
      withCredentials: true,
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

const WithAuth = (Component) => {
  const AuthHOC = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkLogin = async () => {
        const authenticated = await checkAuthStatus();
        setIsLoggedIn(authenticated);
        setLoading(false);
      };
      checkLogin();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }

    return <Component />;
  };

  return AuthHOC();
};

export default WithAuth;

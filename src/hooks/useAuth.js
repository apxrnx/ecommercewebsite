import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleSignUp = async ({ displayName, email, password }) => {
    try {
      
      const userData = {
        id: Date.now().toString(), 
        email,
        displayName,
      };

      
      console.log(userData, "user");

      
      dispatch(setUser(userData));

      
      navigate("/");
    } catch (error) {
      console.error("Error signing up: ", error.message);
      
    }
  };

  const handleLogin = async ({ displayName, email, password }) => {
    try {
      
      const userData = {
        id: Date.now().toString(), 
        email,
        displayName,
      };

      console.log(userData);

      
      dispatch(setUser(userData));

      
      navigate("/");
    } catch (err) {
      console.error("Error logging in: ", err.message);
      
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(setUser(null)); 

      navigate("/");
    } catch (err) {
      console.error("Error signing out: ", err.message);
    }
  };

  return { handleSignUp, handleLogin, handleSignOut };
};

export default useAuth;

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { API_URL } from "./config";

function useAuth() {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/check-auth");
  
      if (response.status === 401) {
        throw new Error("User not authenticated");
      }
  
      const data = await response.json();
  
      if (data.user) {
        setUser(data.user);
      } else {
        throw new Error("User not authenticated");
      }
    } catch (error) {
      console.error("Error:", error);
      setUser(null);
      Cookies.remove("session_id");
     window.location.href="/login"
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Response data:", data.username);
      if (data.username) {
        setUser(data.username);
        Cookies.set("loggedIn", true);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("Login failed");
    }
  };
  const logout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
      });
      const data = await response.json();
      if (data.success) {
        setUser(null);
        Cookies.remove("session_id");
        window.location.href = "/signin";
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }0
  };

  useEffect(() => {
    // checkAuth();
  }, []);

  return { user, login, logout };
}

export default useAuth;
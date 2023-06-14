import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function useAuth() {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data.user);
      Cookies.set("session_id", data.session_id, { expires: 7 }); // Set the session ID in a cookie with a 7-day expiration
    } else {
      throw new Error("Login failed");
    }
  };

  const logout = async () => {
    const response = await fetch("http://localhost:3001/logout", {
      method: "POST",
    });

    if (response.ok) {
      setUser(null);
      Cookies.remove("session_id"); // Remove the session ID cookie
    } else {
      throw new Error("Logout failed");
    }
  };

  useEffect(() => {
    const session_id = Cookies.get("session_id");
    if (session_id) {
      const checkAuth = async () => {
        const response = await fetch("http://localhost:3001/check-auth", {
          headers: {
            Authorization: `Bearer ${session_id}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          Cookies.remove("session_id"); // Remove the session ID cookie if the authentication check fails
        }
      };

      checkAuth();
    }
  }, []);

  return { user, login, logout };
}

export default useAuth;
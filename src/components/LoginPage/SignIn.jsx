import React, { useState } from "react";
import logo from "../../assets/images/logoBlue.png";
import Cookies from "js-cookie";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      alert("Error: Invalid email");
      return;
    }

    if (!isPasswordValid(password)) {
      alert("Error: Password must be at least 8 characters");
      return;
    }

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      Cookies.set("session_id", user.session_id, { expires: 7 }); // Set the session ID in a cookie with a 7-day expiration
      window.location.href = "/FullHomepage";
    } else {
      console.error("Error:", response.statusText);
    }
  };

  useEffect(() => {
    const session_id = Cookies.get("session_id");
    if (!session_id) {
      window.location.href = "/signin"; // Redirect to the login page if the session ID is not found
    }
  }, []);


  return (
    <section className="container-form container-form-sign-in">
      <div className="container-logo">
        <img src={logo} className="login-logo" alt="Logo" />
        <h1>Sign In</h1>
      </div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#" className="forget_password">
          Forgot Password
        </a>
        <button type="submit" className="signIn-register-btn">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SignIn;

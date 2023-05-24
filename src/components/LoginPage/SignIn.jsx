import React, { useState } from "react";
import logo from "../../assets/images/logoBlue.png";

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
      window.location.href = "/FullHomepage";
    } else {
      console.error("Error:", response.statusText);
    }
  };


  return (
    <section className="container-form container-form-sign-in">
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h1>Sign In</h1>
        <div className="container-logo">
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SignIn;
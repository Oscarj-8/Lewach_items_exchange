import React, { useState } from "react";
import logo from "../../assets/images/logoBlue.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("Logged in:", user);
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
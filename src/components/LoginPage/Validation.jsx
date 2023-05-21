import React from "react"
function ValidationSignIn() 
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
    console.error("Error: Invalid email");
    return;
  }

  if (!isPasswordValid(password)) {
    console.error("Error: Password must be at least 8 characters");
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
    console.log("Logged in:", user);
  } else {
    console.error("Error:", response.statusText);
  }
};

export default ValidationSignIn;
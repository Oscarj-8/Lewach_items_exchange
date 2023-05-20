import React, { useState } from "react";

function SignUp() {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    region: "",
    cityzone: "",
    subcityworeda: "",
    pobox: "",
    snl: "",
    ssn: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      console.error("Error: Passwords do not match");
      return;
    }

    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newUser = await response.json();
      console.log("Registered:", newUser);
    } else {
      console.error("Error:", response.statusText);
    }
  };

  const nextStep = () => {
    setFormStep(1);
  };

  const previousStep = () => {
    setFormStep(0);
  };

  return (
    <section className="container-form container-form-sign-up">
      <form onSubmit={handleRegister} className="sign-up-form">
        {formStep === 0 && (
          <>
            <h1>Create Account</h1>
            <div className="fl">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </>
        )}

        {formStep === 1 && (
          <>
            <h1>Address</h1>
            <div>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Region
                </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <select
                name="cityzone"
                value={formData.cityzone}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  City/Zone
                </option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <input
                type="text"
                placeholder="Subcity/Woreda"
                name="subcityworeda"
                value={formData.subcityworeda}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="P.O.Box"
                name="pobox"
                value={formData.pobox}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Special Name for your location"
                name="snl"
                value={formData.snl}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="SSN"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
              />
              <button type="button" onClick={previousStep}>
                Back
              </button>
              <button type="submit">Register</button>
            </div>
          </>
        )}
      </form>
    </section>
  );
}

export default SignUp;
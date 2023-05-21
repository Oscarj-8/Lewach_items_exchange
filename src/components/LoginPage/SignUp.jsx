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
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validateStep0 = () => {
    const errors = {};
    if (!formData.firstname.trim()) {
      errors.firstname = "First name is required";
    }
    if (!formData.lastname.trim()) {
      errors.lastname = "Last name is required";
    }
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!formData.confirmpassword.trim()) {
      errors.confirmpassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmpassword) {
      errors.confirmpassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep1 = () => {
    const errors = {};
    if (!formData.region.trim()) {
      errors.region = "Region is required";
    }
    if (!formData.cityzone.trim()) {
      errors.cityzone = "City/Zone is required";
    }
    if (!formData.subcityworeda.trim()) {
      errors.subcityworeda = "Subcity/Woreda is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const isStep0Valid = validateStep0();
    const isStep1Valid = validateStep1();

    if (!isStep0Valid || !isStep1Valid) {
      console.error("Error: Form is invalid");
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
    const isStep0Valid = validateStep0();
    if (isStep0Valid) {
      setFormStep(1);
    }
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
              {formErrors.firstname && (
                <div className="error">{formErrors.firstname}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              {formErrors.lastname && (
                <div className="error">{formErrors.lastname}</div>
              )}
            </div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {formErrors.username && (
              <div className="error">{formErrors.username}</div>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <div className="error">{formErrors.email}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && (
              <div className="error">{formErrors.password}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            {formErrors.confirmpassword && (
              <div className="error">{formErrors.confirmpassword}</div>
            )}
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
              {formErrors.region && (
                <div className="error">{formErrors.region}</div>
              )}
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
              {formErrors.cityzone && (
                <div className="error">{formErrors.cityzone}</div>
              )}
              <input
                type="text"
                placeholder="Subcity/Woreda"
                name="subcityworeda"
                value={formData.subcityworeda}
                onChange={handleChange}
                required
              />
              {formErrors.subcityworeda && (
                <div className="error">{formErrors.subcityworeda}</div>
              )}
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
import logo from "../../assets/images/logoBlue.png";
import "../../logreg.css";
import React, { useState } from "react";
import Validation from "./LoginValidation";

function Logreg() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
  })
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.values]}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  function adder(){
    const container = document.querySelector('.container');
  container.classList.add('sign-out-panel-active');
   
  }
  function remover(){
    const container = document.querySelector('.container');
    container.classList.remove('sign-out-panel-active');
  }

function next(){
  const formFirst = document.querySelector(".first");
  const formSecond = document.querySelector(".second");
  formFirst.classList.add('Disable');
  formSecond.classList.add('Active');
  formSecond.classList.remove('Disable');
  formFirst.classList.remove('Active');
}
  function back() {
    const formFirst = document.querySelector(".first");
    const formSecond = document.querySelector(".second");
    formFirst.classList.remove('Disable');
  formSecond.classList.remove('Active');
  formSecond.classList.add('Disable');
  formFirst.classList.add('Active');

}
  return (
    <section className="container ">
      <section className="container-form container-form-sign-in">
        <div action="" className="sign-in-form" >
          <h1>Sign In</h1>
          <div className="container-logo">
            <a href="#" className="logo">
              <img src={logo} />
            </a>
          </div>
          <input type="email" placeholder="Email" name="email"
            onChange={handleInput} />
          {errors.email && <span className="text-warning">{ errors.email}</span>}
          <input type="password" placeholder="Password" name="password"
            onChange={handleInput} />
          {errors.password && <span className="text-warning">{ errors.password}</span>}
          <a href="#" className="forget_password">
            Forgot Password
          </a>
          <button type="Submit" onClick={handleSubmit}>Sign In</button>
        </div>
      </section>
      <section className="container-form container-form-sign-up">
        <div className="sign-up-form">
          <div className="form first">
          <h1>Create Account</h1>
          <div className="fl">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder=" Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={next} className="nextBtn">Next</button>
          </div> 

         <div className="form second">
          <h1>Address</h1> 
            <div >
              <select name="region" id="region">
              <option value="" disabled selected hidden>Region</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <select name="region" id="region">
              <option value="" disabled selected hidden>City/Zone</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
          <input type="text" placeholder=" Subcity/Woreda" />
          <input type="text" placeholder="P.O.Box" />
          <input type="text" placeholder="Special Name for your location" />
          <input type="text" placeholder="SSN" />
           <input type="checkbox" name="" id="" /> 
          <button onClick={back} className="backtBtn">Back</button>
          <button>Register</button>
          </div>
          </div>
        </div>
      </section>
      <section>
      </section>
      
      <section className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-sign-in">
            <h1 className="overlay__main-head">Welcome Back</h1>
            <p className="overlay__slogan new-class">
              To keep connected with us please login with your personal info
            </p>
            <button onClick={remover} className="button overlay__button-ghost overlay__button-sign-in">
              Sign in
            </button>
          </div>
          <div className="overlay-panel overlay-sign-up">
            <h1 className="overlay__main-head">Hello there!</h1>
            <p className="overlay__slogan  new-class">
              If your new here register and start your journey with us
            </p>
            <button onClick={adder} className="button overlay__button-ghost overlay__button-sign-up">
              Register
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Logreg;

import logo from "../../assets/images/logoBlue.png";
import "../../logreg.css";
import React, { useState } from "react";
import"../../backend/server"

function Logreg() {
  const handleSubmit = async () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log('Logged in:', user);
    } else {
      console.error('Error:', response.statusText);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
   
    if (response.ok) {
      const newUser = await response.json();
      console.log('Registered:', newUser);
    } else {
      console.error('Error:', response.statusText);
    }
  };



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
        <form method="post" className="sign-up-form" >
          <div className="form first">
          <h1>Create Account</h1>
          <div className="fl">
              <input type="text" placeholder="First Name" name="firstname" required={true} />
            <input type="text" placeholder="Last Name" name="lastname" required={true}/>
          </div>
          <input type="text" placeholder=" Username" name="username" required={true}/>
          <input type="email" placeholder="Email" name="email" required={true}/>
          <input type="password" placeholder="Password" name="password" required={true}/>
          <input type="password" placeholder="Confirm Password" name="confirmpassword" required={true}/>
          <button onClick={next} className="nextBtn">Next</button>
          </div> 

         <div className="form second" >
          <h1>Address</h1> 
            <div >
              <select name="region" id="region" required={true}>
              <option value="" disabled selected hidden>Region</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <select name="cityzone" id="cityzone" required={true}>
              <option value="" disabled selected hidden>City/Zone</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
          <input type="text" placeholder=" Subcity/Woreda" name="subcityworeda" required={true}/>
          <input type="text" placeholder="P.O.Box" name="pobox"/>
          <input type="text" placeholder="Special Name for your location" name="snl"/>
          <input type="text" placeholder="SSN" name="ssn"/>
           <input type="checkbox" name="" id="" /> 
          <button onClick={back} className="backtBtn">Back</button>
          <button>Register</button>
          </div>
          </div>
        </form>
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

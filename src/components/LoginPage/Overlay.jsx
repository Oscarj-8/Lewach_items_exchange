import React from "react";

function Overlay({ isSignUpActive, toggleSignUpActive }) {
  return (
    <section className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-sign-in">
          <h1 className="overlay__main-head">Welcome Back</h1>
          <p className="overlay__slogan new-class">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={toggleSignUpActive}
            className="overlay-btns signIn-register-btn"
          >
            Sign in
          </button>
        </div>
        <div className="overlay-panel overlay-sign-up">
          <h1 className="overlay__main-head">New To The Platform?</h1>
          <p className="overlay__slogan new-class">
            If your new here register and start your journey with us
          </p>
          <button
            onClick={toggleSignUpActive}
            className="overlay-btns signIn-register-btn"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overlay;

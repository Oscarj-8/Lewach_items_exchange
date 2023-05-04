import logo from "../../assets/images/logoWhite.png";

function Logreg() {
  return (
    <section className="container ">
      <section classNameName="container-form container-form-sign-up">
        <form action="" className="sign-up-form">
          <h1>Create Account</h1>
          <div className="container-social">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="fl">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder=" Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Sign Up</button>
        </form>
      </section>
      <section className="container-form container-form-sign-in">
        <form action="" className="sign-up-form">
          <h1>Sign In</h1>
          <div className="container-social">
            <a href="#" className="social">
              <img src={logo} />
            </a>
          </div>
          <input type="email" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          <a href="#" className="forget-password">
            Forgot Password
          </a>
          <button>Sign In</button>
        </form>
      </section>
      <section className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-sign-in">
            <h1 className="overlay__main-head">Welcome Back</h1>
            <p className="overlay__slogan">
              To keep connected with us please login with your personal info
            </p>
            <button className="button overlay__button-ghost overlay__button-sign-in">
              Sign in
            </button>
          </div>
          <div className="overlay-panel overlay-sign-up">
            <h1 className="overlay__main-head">Hello there!</h1>
            <p className="overlay__slogan">
              If your new here register and start your journey with us
            </p>
            <button className="button overlay__button-ghost overlay__button-sign-up">
              Register
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Logreg;

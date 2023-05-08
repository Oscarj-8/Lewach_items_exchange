const signUpButton = document.querySelector(".overlay__button-sign-up");
const signInButton = document.querySelector(".overlay__button-sign-in");
const container = document.querySelector(".container");

signUpButton.addEventListener("click", () => {
  container.classList.add("sign-out-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("sign-out-panel-active");
});

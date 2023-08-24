const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log({ Email: emailInput.value, Password: passwordInput.value });
    loginForm.reset();
  }
}

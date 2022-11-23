const formSignUp = document.getElementById("formSignUp");
const formSignIn = document.getElementById("formSignIn");
const formForgotPassword = document.getElementById("formForgotPassword");
handleForm = (event) => { event.preventDefault(); } 
formSignUp.addEventListener('submit', handleForm);
formSignIn.addEventListener('submit', handleForm);
formForgotPassword.addEventListener('submit', handleForm);

signUp = () => {
  let email = document.getElementById('emailSignUp').value;
  let password = document.getElementById('passwordSignUp').value;
  let confirmPassword = document.getElementById('confirmPassSignUp').value;
  let checkbox = document.getElementById('btnAgreement');

  if (checkbox.checked === true) {
    email && password && confirmPassword != " " ? window.location.replace("dashboard.html") : "return";
  } else if (checkbox.checked === false){
    warningNotif('<i class="fa-solid fa-circle-exclamation"></i>', 'You must agree to our Terms and Policies.', 3000);
  }
  window.localStorage.setItem('action', 'signup');
}

signIn = () => {
  let email = document.getElementById('emailSignIn').value;
  let password = document.getElementById('passwordSignIn').value;

  email == 'intertouch@gmail.com' && password == 'intertouch' ? window.location.replace("dashboard.html") : errorNotif('<i class="fa-solid fa-triangle-exclamation"></i>', 'Wrong email or password, Try again.', 3000);

  window.localStorage.setItem('action', 'signin');
}

forgotPassword = () => {
  let email = document.getElementById('emailForgotPass');

  email.value != '' ? infoNotif('<i class="fa-solid fa-circle-info"></i>', 'If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.', 8000) : "";
  email.value = " ";
}


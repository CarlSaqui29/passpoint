const formSignUp = document.getElementById("formSignUp");
handleForm = (event) => { event.preventDefault(); } 
formSignUp.addEventListener('submit', handleForm);

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

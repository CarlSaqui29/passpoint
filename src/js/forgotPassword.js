const formForgotPassword = document.getElementById("formForgotPassword");
handleForm = (event) => { event.preventDefault(); }
formForgotPassword.addEventListener('submit', handleForm);

forgotPassword = () => {
  let email = document.getElementById('emailForgotPass');

  email.value != '' ? infoNotif('<i class="fa-solid fa-circle-info"></i>', 'If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.', 8000) : "";
  email.value = " ";
}

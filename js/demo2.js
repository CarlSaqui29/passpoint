const formUpdateEmail = document.getElementById("formUpdateEmail");
const formUpdatePassword = document.getElementById("formUpdatePassword");
handleForm = (event) => { event.preventDefault(); } 
formUpdateEmail.addEventListener('submit', handleForm);
formUpdatePassword.addEventListener('submit', handleForm);

updateEmail = () => {
  let modalEdit = document.getElementById('Edit-Profile-Modal');
  let email = document.getElementById('emailUpdate').value;
  let password = document.getElementById('emailPassUpdate').value;

  if (email && password != " ") {
    UIkit.modal(modalEdit).hide();
    successNotif('<i class="fa-solid fa-circle-check"></i>', 'Successfully updated your email.', 3000)
  }
}

updatePassword = () => {
  let modalEdit = document.getElementById('Edit-Profile-Modal');
  let email = document.getElementById('passwordEmailUpdate').value;
  let password = document.getElementById('passwordPassUpdate').value;
  let confirmPassword = document.getElementById('confirmPassUpdate').value;

  if (email && password && confirmPassword != " ") {
    UIkit.modal(modalEdit).hide();
    successNotif('<i class="fa-solid fa-circle-check"></i>', 'Successfully updated your password.', 3000)
  }
}
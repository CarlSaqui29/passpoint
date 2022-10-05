const formSignIn = document.getElementById("formSignIn");
handleForm = (event) => { event.preventDefault(); }
formSignIn.addEventListener('submit', handleForm);

signIn = () => {
  let email = document.getElementById('emailSignIn').value;
  let password = document.getElementById('passwordSignIn').value;

  email == 'intertouch@gmail.com' && password == 'intertouch' ? window.location.replace("dashboard.html") : errorNotif('<i class="fa-solid fa-triangle-exclamation"></i>', 'Wrong email or password, Try again.', 3000);

  window.localStorage.setItem('action', 'signin');
}
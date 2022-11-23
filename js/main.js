// Hide and show function in forms
showSignIn = () => {
  document.getElementById("formSignIn").style.display = "block";
  document.getElementById("formSignUp").style.display = "none";
  document.getElementById("formForgotPassword").style.display = "none";
}
showSignUp = () => {
  document.getElementById("formSignIn").style.display = "none";
  document.getElementById("formSignUp").style.display = "block";
  document.getElementById("formForgotPassword").style.display = "none";
}
showForgotPassword = () => {
  document.getElementById("formSignIn").style.display = "none";
  document.getElementById("formSignUp").style.display = "none";
  document.getElementById("formForgotPassword").style.display = "block";
}

// All Action confirmation notification

// sample alert delete account 1st option
gotoHome = () => {
  window.location.replace("index.html")
}
accountDeletionConfirm = () => {
  // let modalEdit = document.getElementById('Edit-Profile-Modal');
  // destroy session and delete account to database
  // infoNotif('<i class="fa-solid fa-circle-info"></i>', 'Your account is successfully deleted.', 3000);
  // UIkit.modal(modalEdit).hide();
  // const timeout = setTimeout(gotoHome, 3000);
  window.location.replace("index.html")
  window.localStorage.setItem('action', 'deleteAccount');
}
accountDeletion = () => {
  let question = "Are you sure you want to delete your account?"
  confirm(question) == true ? accountDeletionConfirm() : "return";
}

// delete account 2nd option
accountDeleted1 = () => {
  let question = "Are you sure you want to delete your account?"
  confirm(question) == true ? window.location.replace("deletedAccount.html") : "return";
}


// destroy profile
destroyProfileConfirm = () => {
  successNotif('<i class="fa-solid fa-trash"></i>','Profile successfully deleted!', 3000);
}
destroyProfile = () => {
  let question = "Are you sure you want to delete this profile?";
  confirm(question) == true ? destroyProfileConfirm() : "return";
}


// footer current year
new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();
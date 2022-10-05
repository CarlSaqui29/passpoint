// All Action confirmation notification

// delete account
accountDeletionConfirm = () => {
  window.location.replace("index.html")
  window.localStorage.setItem('action', 'deleteAccount');
}
accountDeletion = () => {
  let question = "Deleting your passpoint account will lose all the profiles that you have created and all the devices connected will be disconnected.\n\nAre you sure you want to delete your account?"
  confirm(question) == true ? accountDeletionConfirm() : "return";
}

// destroy profile
destroyProfileConfirm = () => {
  successNotif('<i class="fa-solid fa-trash"></i>','Profile successfully deleted!', 3000);
}
destroyProfile = () => {
  let question = "Are you sure you want to delete this profile?";
  confirm(question) == true ? destroyProfileConfirm() : "return";
}

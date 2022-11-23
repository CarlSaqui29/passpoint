// Toast Notifications

// green notification - for success action
successNotif = (icon, message, duration) => {
 UIkit.notification({
    message: icon + message,
    status: 'success',
    pos: 'top-center',
    timeout: duration
  }); 
}

// blue notification - for info
infoNotif = (icon, message, duration) => {
  UIkit.notification({
     message: icon + message,
     status: 'primary',
     pos: 'top-center',
     timeout: duration
   }); 
 }

// warning notification
// use this icon for warning notifs - <i class="fa-solid fa-circle-exclamation"></i>
 warningNotif = (icon, message, duration) => {
  UIkit.notification({
     message: icon + message,
     status: 'warning',
     pos: 'top-center',
     timeout: duration
   }); 
 }

 //  red notification - for error
// use this icon for error notifs - <i class="fa-solid fa-triangle-exclamation"></i>
errorNotif = (icon, message, duration) => {
  UIkit.notification({
     message: icon + message,
     status: 'danger',
     pos: 'top-center',
     timeout: duration
   }); 
 }
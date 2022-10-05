window.onscroll = function() {onScroll()};
const nav = document.getElementById("nav");
const logo = document.getElementById('logo');

onScroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add("nav-scrolled");
    logo === null ? "not exist" :  document.getElementById("logo").src = "../src/imgs/logo2.png";
  } else {
    nav.classList.remove("nav-scrolled");
    logo === null ? "not exist" : document.getElementById("logo").src = "../src/imgs/logo.png";
  }
}
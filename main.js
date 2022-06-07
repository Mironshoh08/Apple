window.onscroll = function() {myFunction()};
var header1 = document.querySelector(".header")
var header = document.querySelector(".section1__header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header1.style.display = "none"
    header1.style.transition = ".4s"

  } else {
    header.classList.remove("sticky");
    header1.style.display = "flex"
    header1.style.transition = ".4s"
  }
}











function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
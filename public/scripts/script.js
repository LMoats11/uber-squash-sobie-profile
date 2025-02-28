
document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js loaded");


  window.onscroll = function () {
      let navbar = document.getElementById("navbar");
      if (navbar) {
          navbar.style.backgroundColor = window.scrollY > 50 ? "blue" : "transparent";
      }
  };
});

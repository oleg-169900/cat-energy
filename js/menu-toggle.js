"use strict";

(function () {
  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".menu-toggle");

  if (window.innerWidth >= "768") {
    navMain.classList.remove("hidden");
  }

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("hidden")) {
      navMain.classList.remove("hidden");
      navToggle.classList.add("menu-toggle--close");
    } else {
      navMain.classList.add("hidden");
      navToggle.classList.remove("menu-toggle--close");
    }
  });
})();

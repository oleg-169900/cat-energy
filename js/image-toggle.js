"use strict";

(function () {
  var stats = document.querySelector('.stats');
  var beforeBtn = document.querySelector("#before-btn");
  var afterBtn = document.querySelector("#after-btn");
  var beforeImg = document.querySelector(".stats__pic--before");
  var afterImg = document.querySelector(".stats__pic--after");
  var inscriptions = Object.values(document.querySelectorAll(".stats__inscription"));

  afterImg.classList.add("hidden");
  inscriptions.map(function(val) {
    val.classList.add("hidden");
  })

  if (stats.classList.contains("stats--nojs")) {
    stats.classList.remove("stats--nojs");
  }


  beforeBtn.addEventListener("click", function() {
    if (beforeImg.classList.contains("hidden")) {
      beforeBtn.classList.add("stats__control--active");
      afterBtn.classList.remove("stats__control--active");
      beforeImg.classList.remove("hidden");
      afterImg.classList.add("hidden");
    }
  });

  afterBtn.addEventListener("click", function() {
    if (afterImg.classList.contains("hidden")) {
      afterBtn.classList.add("stats__control--active");
      beforeBtn.classList.remove("stats__control--active");
      afterImg.classList.remove("hidden");
      beforeImg.classList.add("hidden");
    }
  });
})();

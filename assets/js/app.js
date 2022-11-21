"use strict";

const jsBtn = document.getElementById("g-nav__btn");
const jsNav = document.getElementById("g-nav");
jsBtn.addEventListener("click", function () {
  this.classList.toggle("is-active");
  jsNav.classList.toggle("is-active");
});

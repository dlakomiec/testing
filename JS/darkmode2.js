function darkMode() {
  const body = document.querySelector(".body");
  const header = document.querySelector(".header--js");
  const logo = document.querySelector(".header-logo--js");
  body.classList.toggle("body-dark--js");
  header.classList.toggle("header-dark--js");
  logo.classList.toggle("header-logo-dark--js");
}

const btn = document.querySelector(".dark-mode--js");
btn.addEventListener("click", darkMode);

const logo = document.querySelector(".header-logo--js");

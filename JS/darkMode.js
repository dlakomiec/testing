export function darkMode() {
  const body = document.querySelector(".body");
  const header = document.querySelector(".header");
  body.classList.toggle("dark-mode--js");
  header.classList.toggle("dark-mode-header--js");
}

const btn = document.querySelector(".dark-mode");

btn.addEventListener("click", darkMode);

console.log(btn);

export default darkMode;

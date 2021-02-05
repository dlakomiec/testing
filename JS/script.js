import dark from "./darkMode.js";
import { newP } from "./NewP.js";

const imie = "daniel";
console.log(`hej ${imie} co u ciebie?`);

const main = document.querySelector(".main");
console.log(main);

const h2 = document.querySelector(".main-box-h2");
console.log(h2);

const button = document.querySelector(".main-button");

h2.innerHTML = " Nowy tekst by JS ";

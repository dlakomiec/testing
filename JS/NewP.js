export function newP() {
  const headerH1 = document.querySelector(".header-h1");
  headerH1.innerHTML = " TEKST PO KLIKNIECIU 🥰";
}

const galeria = document.querySelector(".header-li-galeria");
galeria.addEventListener("click", newP);
console.log(galeria);

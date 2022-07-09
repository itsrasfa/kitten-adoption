// menu mobile
const nav = document.getElementById('nav')
const open = document.querySelector(".open")
const close = document.querySelector(".close")


nav.addEventListener('click', () => {
  const menu = document.querySelector('.menu-links')
  menu.classList.toggle('ativo');
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
})


// ativar scroll 
const btnBackToTop = document.querySelector(".back-to-top");
btnBackToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", (e) => {
  btnBackToTop.style.display = window.scrollY > 20 ? "block" : "none";
});
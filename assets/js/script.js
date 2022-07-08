const nav = document.getElementById('nav')
const open = document.querySelector(".open")
const close = document.querySelector(".close")


nav.addEventListener('click', () => {
  const menu = document.querySelector('.menu-links')
  menu.classList.toggle('ativo');
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
})
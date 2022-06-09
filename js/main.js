const elButton = document.querySelector(".navbar__burger-button");
const elMenu = document.querySelector(".menu");


elButton.addEventListener('click', () => {
  elMenu.classList.toggle('menu-open')
})
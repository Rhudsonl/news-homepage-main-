const menuBx = document.querySelector('.bx');
const menu = document.querySelector('ul')

function eventClickBX() {
   menu.classList.toggle('nav-links')
   menu.classList.toggle('active-nav-links')
   menuBx.classList.toggle('bx')
   menuBx.classList.toggle('active-bx')
   

}
menuBx.addEventListener('click', eventClickBX)
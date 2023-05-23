const buttonActive = document.getElementById('menuToggle');
const menu = document.getElementById('menu-list--active');

buttonActive.addEventListener('click',()=>{
    menu.classList.toggle('menu-list--active');
    buttonActive.classList.toggle('active');
    
})

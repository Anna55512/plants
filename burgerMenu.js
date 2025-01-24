let btn = document.querySelector('.burger_menu')
let nav = document.querySelector('.navBurger')

btn.addEventListener('click', openBurgerMenu)

function openBurgerMenu() {
    nav.classList.toggle('navBurgerActive')
}

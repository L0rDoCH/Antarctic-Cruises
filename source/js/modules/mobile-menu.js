const navMainToggle = document.querySelector('.header__menu-toggle');
const navMainBurger = document.querySelector('.header__menu-toggle-burger');
const navMainMenu = document.querySelector('.header-wrapper');
const header = document.querySelector('.header');

export const mobileMenu = () => {
  navMainToggle.classList.add('header__menu-toggle--JS-menu');
  navMainMenu.classList.add('header-wrapper--close');
  header.classList.add('header--JS-menu');

  navMainToggle.addEventListener('click', function () {
    if (navMainBurger.classList.contains('header__menu-toggle-burger--close')) {
      navMainBurger.classList.remove('header__menu-toggle-burger--close');
      navMainMenu.classList.add('header-wrapper--close');
      navMainMenu.classList.remove('header-wrapper--open');
    } else {
      navMainBurger.classList.add('header__menu-toggle-burger--close');
      navMainMenu.classList.remove('header-wrapper--close');
      navMainMenu.classList.add('header-wrapper--open');
    }
  });
};



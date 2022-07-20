const navMain = document.querySelector('.nav');
const navToggle = navMain.querySelector('.nav__toggle--menu');
const pageMain = document.querySelector('.page__main');

const onNavMenuOpen = () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
};

const openMenu = () => {
  navMain.classList.remove('nav--nojs');
  pageMain.classList.remove('page__main--nojs');
  navToggle.addEventListener('click', onNavMenuOpen);
};

export { openMenu };

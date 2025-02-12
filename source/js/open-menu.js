const openMenu = () => {
  if (document.querySelector('.page__header')) {
    const pageHeader = document.querySelector('.page__header');
    const navMain = document.querySelector('.nav');
    const navToggle = navMain.querySelector('.nav__toggle--menu');
    const page = document.querySelector('.page');
    const pageBody = page.querySelector('.page__body');

    const onNavMenuOpen = () => {
      if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
        page.style.overflow = 'hidden';
        pageBody.style.overflow = 'hidden';
      } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
        page.style.overflow = 'auto';
        pageBody.style.overflow = 'auto';
      }
    };

    pageHeader.classList.remove('page__header--nojs');
    navMain.classList.remove('nav--nojs');
    navToggle.addEventListener('click', onNavMenuOpen);
  }
};

export {openMenu};

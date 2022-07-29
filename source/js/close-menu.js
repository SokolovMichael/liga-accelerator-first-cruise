const closeMenu = () => {
  if (document.querySelector('.page__header')) {
    const navList = document.querySelector('.nav__list-wrapper');
    const navMain = document.querySelector('.nav');
    const page = document.querySelector('.page');
    const pageBody = page.querySelector('.page__body');

    navList.addEventListener('click', (evt) => {
      if (evt.target.className === 'nav__list-wrapper') {
        navMain.classList.remove('nav--opened');
        navMain.classList.add('nav--closed');
        page.style.overflow = 'auto';
        pageBody.style.overflow = 'auto';
      }

      if (evt.target.className !== 'site-list__item-link') {
        return;
      }

      navMain.classList.remove('nav--opened');
      navMain.classList.add('nav--closed');
      page.style.overflow = 'auto';
      pageBody.style.overflow = 'auto';
    });
  }
};

export {closeMenu};

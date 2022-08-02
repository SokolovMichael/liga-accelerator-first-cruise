const closeMenu = () => {
  if (document.querySelector('.page__header')) {
    const navWrapper = document.querySelector('.nav__wrapper');
    const navMain = document.querySelector('.nav');
    const page = document.querySelector('.page');
    const pageBody = page.querySelector('.page__body');

    navWrapper.addEventListener('click', (evt) => {
      if (evt.target.className === 'nav__wrapper') {
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

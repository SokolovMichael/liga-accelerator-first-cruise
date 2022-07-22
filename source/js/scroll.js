const anchors = document.querySelectorAll('a.site-list__item-link');
const footerAnchors = document.querySelectorAll('a.links__item-link');

const scrollAnchors = () => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

const scrollFooterAnchors = () => {
  for (let footerAnchor of footerAnchors) {
    footerAnchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = footerAnchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

const scrollTo = () => {
  scrollAnchors();
  scrollFooterAnchors();
};

export { scrollTo };

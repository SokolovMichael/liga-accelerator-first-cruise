const catalogList = document.querySelector('.catalog__list');
const cards = document.querySelectorAll('.card');

const focusCard = () => {
  catalogList.addEventListener('keydown', (evt) => {
    if (evt.key === 'Tab') {
      evt.target.classList.add('card--hover');

      for (let i = 0; i < cards.length; i++) {
        cards[i].querySelector('a').onblur = function () {
          cards[i].classList.remove('card--hover');
        };
      }
    }
  });
};

export {focusCard};

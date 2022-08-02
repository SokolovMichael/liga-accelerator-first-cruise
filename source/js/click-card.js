const catalogList = document.querySelector('.catalog__list');
const cards = document.querySelectorAll('.card');

const clickCard = () => {
  catalogList.addEventListener('click', (evt) => {
    if (evt.target.className !== 'card__link') {
      return;
    }

    evt.preventDefault();
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('card--hover');
    }
  });
};

export {clickCard};

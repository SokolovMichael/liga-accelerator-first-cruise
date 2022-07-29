const cards = document.querySelectorAll('.card');

const focusCard = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].onfocus = function () {
      cards[i].classList.add('card--hover');
    };

    cards[i].querySelector('a').onblur = function () {
      cards[i].classList.remove('card--hover');
    };
  }
};

export {focusCard};

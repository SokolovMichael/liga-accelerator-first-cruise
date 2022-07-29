const tel = document.querySelector('#tel');

const checkTel = () => {
  tel.addEventListener('focus', (_) => {
    if (!/^\+\d*$/.test(tel.value)) {
      tel.value = '+';
    }
  });
};

const cancelEnteringNonDigits = () => {
  tel.addEventListener('keypress', (evt) => {
    if (!/\d/.test(evt.key)) {
      evt.preventDefault();
    }
  });
};

const inputTel = () => {
  checkTel();
  cancelEnteringNonDigits();
};

export {inputTel};

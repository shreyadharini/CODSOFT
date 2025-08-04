// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.id === 'equal') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultDisplayed && !isNaN(value)) {
      currentInput = value;
      resultDisplayed = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});

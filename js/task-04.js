let counterValue = 0;
const counterElement = document.querySelector('#counter');
const valueElement = counterElement.querySelector('#value');
const decrementButton = counterElement.querySelector('[data-action="decrement"]');
const incrementButton = counterElement.querySelector('[data-action="increment"]');

const setValue = () => {
    valueElement.textContent = counterValue;
};
const increment = () => {
    counterValue += 1;
    setValue();
};

const decrement = () => {
    counterValue -= 1;
    setValue();
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);


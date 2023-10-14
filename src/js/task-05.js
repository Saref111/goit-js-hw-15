const nameInputElement = document.querySelector('#name-input');
const nameOutputElement = document.querySelector('#name-output');

const onInputChange = (event) => {
    nameOutputElement.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameOutputElement.textContent = 'Anonymous';
    }
};

nameInputElement.addEventListener('input', onInputChange);

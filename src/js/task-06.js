const inputElement = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    const inputLength = Number(event.currentTarget.dataset.length);
    const inputValue = event.currentTarget.value.length;
    
    if (inputLength === inputValue) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
};

inputElement.addEventListener('blur', onInputBlur);

const inputRangeElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
textElement.style.fontSize = `${inputRangeElement.value}px`;

const onInputRangeChange = (event) => {
    textElement.style.fontSize = `${event.currentTarget.value}px`;
};

inputRangeElement.addEventListener('input', onInputRangeChange);

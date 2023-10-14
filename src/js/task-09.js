function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

const onBtnChangeColorClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

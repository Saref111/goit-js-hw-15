function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');
const boxes = document.querySelector('#boxes');

const createBoxes = () => {
  const amount = input.value;
  const divs  = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const size = 30 + (i * 10);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }

  boxes.append(...divs);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};


createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

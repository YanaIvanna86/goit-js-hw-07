function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color');

function hendlchangeColor() {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
};

changeColor.addEventListener('click', hendlchangeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');

function hendlchangeColor() {
   bodyColor.style.backgroundColor = getRandomHexColor();
};

changeColor.addEventListener('click', hendlchangeColor);

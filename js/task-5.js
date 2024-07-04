function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color');

function hendlchangeColor() {

   bodyColor.style.backgroundColor = getRandomHexColor();
   spanColor.textContent = getRandomHexColor();
};

changeColor.addEventListener('click', hendlchangeColor);

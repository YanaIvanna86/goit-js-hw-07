 const input = document.querySelector('#controls input');
const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const boxesContainer = document.querySelector('#boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  
  function createBoxes(amount) {
    const element = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      element.appendChild(box);
    }
    boxesContainer.appendChild(element);
  }

  function destroyBox() {
    boxesContainer.innerHTML ='';
  }
  
    createButton.addEventListener('click', () => {
      const amount = parseInt(input.value, 10);
      if (isNaN(amount) || amount < 1 || amount > 100) return;
      createBoxes(amount);
      input.value ='';  
    });

    destroyButton.addEventListener('click', destroyBox);



   
 
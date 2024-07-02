const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
function hendleInput(event) {
    const hendleOutput = event.currentTarget.value.trim();
    if (hendleOutput) {
        nameOutput.textContent = hendleOutput;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
}
nameInput.addEventListener("input", hendleInput);

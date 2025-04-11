const form = document.querySelector('#alcohol-form');
const messageDiv = document.querySelector('#message');
form.addEventListener('submit', event => {
    event.preventDefault();
    messageDiv.textContent = '';
    const nameInput = document.querySelector('#name');
    const ageInput = document.querySelector('#age');
    const name = nameInput.value;
    const age = Number(ageInput.value);
    if (age >= 18) {
        messageDiv.textContent = `${name}, Вам дозволено купувати алкоголь.`;
    }
    else {
        messageDiv.textContent = `${name}, Ви не досягли відповідного віку, щоб купити алкоголь.`;
    }
});

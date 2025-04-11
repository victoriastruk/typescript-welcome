const form = document.querySelector('#factorial-form');
const stepsList = document.querySelector('#factorial-steps');
form.addEventListener('submit', event => {
    event.preventDefault();
    stepsList.textContent = '';
    const nubmerInput = document.querySelector('#number');
    const number = Number(nubmerInput.value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
        const listItem = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepsList.appendChild(listItem);
    }
});

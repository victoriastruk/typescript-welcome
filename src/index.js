var form = document.querySelector('#factorial-form');
var stepsList = document.querySelector('#factorial-steps');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    stepsList.textContent = '';
    var nubmerInput = document.querySelector('#number');
    var number = Number(nubmerInput.value);
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
        var listItem = document.createElement('li');
        listItem.textContent = "".concat(factorial);
        stepsList.appendChild(listItem);
    }
});

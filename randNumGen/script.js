document.addEventListener('DOMContentLoaded', function () {
    const randomNumberDisplay = document.getElementById('randomNumber');
    const generateNumberButton = document.getElementById('generateNumberButton');
    const limitSlider = document.getElementById('limitSlider');
    const limitValue = document.getElementById('limitValue');

    generateNumberButton.addEventListener('click', generateRandomNumber);
    limitSlider.addEventListener('input', updateLimitValue);

    function generateRandomNumber() {
        const limit = parseInt(limitSlider.value);
        const randomNumber = Math.floor(Math.random() * limit) + 1;
        randomNumberDisplay.textContent = randomNumber;
    }

    function updateLimitValue() {
        limitValue.textContent = limitSlider.value;
    }
});

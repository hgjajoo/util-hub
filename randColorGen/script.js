document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('colorBox');
    const colorHex = document.getElementById('colorHex');
    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', generateRandomColor);

    function generateRandomColor() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
        colorHex.textContent = randomColor;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const passwordBox = document.getElementById('passwordBox');
    const passwordDisplay = document.getElementById('password');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
    const includeNumbersCheckbox = document.getElementById('includeNumbersCheckbox');
    const includeSpecialCharsCheckbox = document.getElementById('includeSpecialCharsCheckbox');
    const generatePasswordButton = document.getElementById('generatePasswordButton');

    generatePasswordButton.addEventListener('click', generatePassword);
    lengthSlider.addEventListener('input', updateLengthValue);

    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = includeNumbersCheckbox.checked;
        const includeSpecialChars = includeSpecialCharsCheckbox.checked;

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_-+=<>?/{}';

        let charset = lowercaseChars;

        if (includeUppercase) {
            charset += uppercaseChars;
        }

        if (includeNumbers) {
            charset += numberChars;
        }

        if (includeSpecialChars) {
            charset += specialChars;
        }

        let generatedPassword = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset.charAt(randomIndex);
        }

        passwordDisplay.textContent = generatedPassword;
    }

    function updateLengthValue() {
        lengthValue.textContent = lengthSlider.value;
    }
});

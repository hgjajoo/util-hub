document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
    const timerInput = document.getElementById('timerInput');
    const beepAudio = document.getElementById('beep');

    let countdown;
    let timeLeft;

    startButton.addEventListener('click', function () {
        startCountdown(parseInt(timerInput.value, 10) || 0);
    });

    function startCountdown(seconds) {
        if (countdown) {
            clearInterval(countdown);
        }

        timeLeft = seconds;

        countdown = setInterval(function () {
            updateCountdown();
            if (timeLeft <= 0) {
                clearInterval(countdown);
                countdownElement.textContent = "Time's up!";
                playBeepSound();
            }
        }, 1000);
    }

    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
        countdownElement.textContent = formattedTime;

        timeLeft--;
    }

    function playBeepSound() {
        beepAudio.play();
    }

    function padZero(number) {
        return number < 10 ? `0${number}` : number;
    }
});

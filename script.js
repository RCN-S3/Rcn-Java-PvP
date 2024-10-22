let timerDuration = 5 * 24 * 60 * 60; // 5 days in seconds

function startTimer(duration, display) {
    let endTime = Date.now() + duration * 1000;

    setInterval(function () {
        const remainingTime = (endTime - Date.now()) / 1000;
        if (remainingTime <= 0) {
            clearInterval();
            display.textContent = "00:00:00:00";
            return;
        }

        let days = Math.floor(remainingTime / (24 * 3600));
        let hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = Math.floor(remainingTime % 60);

        display.textContent = 
            `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

window.onload = function () {
    startTimer(timerDuration, document.getElementById('timer'));
};

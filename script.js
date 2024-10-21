// Create space background with dots and comets
const background = document.getElementById('background');
for (let i = 0; i < 100; i++) {
    let dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.animationDuration = 5 + Math.random() * 5 + 's';
    background.appendChild(dot);
}

setInterval(function () {
    let comet = document.createElement('div');
    comet.className = 'comet';
    comet.style.left = Math.random() * 100 + 'vw';
    comet.style.top = Math.random() * 100 + 'vh';
    comet.style.animationDuration = 2 + Math.random() * 3 + 's';
    comet.style.width = 10 + Math.random() * 10 + 'px';
    comet.style.height = comet.style.width;
    background.appendChild(comet);
    
    setTimeout(() => comet.remove(), 12000); // Remove comet after animation
}, 12000); // Create a new comet every 12 seconds

// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Change background theme
function setTheme(theme) {
    if (theme === 'blue') {
        background.style.background = 'linear-gradient(145deg, #0000FF, #1E90FF, #ADD8E6)';
    } else if (theme === 'red') {
        background.style.background = 'linear-gradient(145deg, #8B0000, #FF4500, #FFA07A)';
    } else if (theme === 'green') {
        background.style.background = 'linear-gradient(145deg, #006400, #32CD32, #98FB98)';
    } else if (theme === 'space') {
        background.style.background = 'linear-gradient(145deg, #020024, #090979, #00d4ff)';
    }
    localStorage.setItem('theme', theme);
}

// Load theme from local storage
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        setTheme(theme);
    }
}

// Start timer countdown
function startTimer(duration, display) {
    let startTime = localStorage.getItem('startTime');
    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem('startTime', startTime);
    }
    const endTime = parseInt(startTime) + duration * 1000;
    let timer = duration;

    setInterval(function () {
        const remainingTime = (endTime - Date.now()) / 1000;
        if (remainingTime <= 0) {
            timer = 0;
            clearInterval();
        } else {
            timer = remainingTime;
        }

        const days = Math.floor(timer / (24 * 3600));
        const hours = Math.floor((timer % (24 * 3600)) / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = Math.floor(timer % 60);

        display.textContent = 
            (days < 10 ? "0" + days : days) + ":" +
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);

        if (timer <= 0) {
            localStorage.removeItem('startTime');
        }
    }, 1000);
}

// Close menu on outside click
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const settingsButton = document.querySelector('.settings');

    if (!menu.contains(event.target) && !settingsButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Load theme and start timer on window load
window.onload = function () {
    loadTheme();
    const sevenDays = 7 * 24 * 60 * 60; // 7 days in seconds
    const display = document.querySelector('#timer');
    startTimer(sevenDays, display);
};

// Initialize view counter
let viewCount = 0;
const viewCounterElement = document.getElementById('views');

setInterval(() => {
    viewCount++;
    viewCounterElement.textContent = viewCount;
}, 1000); // Increment view count every second

// Countdown Timer Logic
const releaseDate = new Date("2024-11-01T00:00:00Z").getTime();
const countdownTimerElement = document.getElementById("countdownTimer");
const countdownToReleaseElement = document.getElementById("countdownToRelease");

setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
        countdownTimerElement.innerHTML = "Released!";
        countdownToReleaseElement.innerHTML = "";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimerElement.innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;
    countdownToReleaseElement.innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;
}, 1000);

// Preview Selection Functionality
const rankDropdown = document.getElementById("rankDropdown");
const keyDropdown = document.getElementById("keyDropdown");
const gemDropdown = document.getElementById("gemDropdown");
const rankPreview = document.getElementById("rankPreview");
const keyPreview = document.getElementById("keyPreview");
const gemPreview = document.getElementById("gemPreview");

rankDropdown.addEventListener("change", () => {
    rankPreview.textContent = rankDropdown.value || "None";
});
keyDropdown.addEventListener("change", () => {
    keyPreview.textContent = keyDropdown.value || "None";
});
gemDropdown.addEventListener("change", () => {
    gemPreview.textContent = gemDropdown.value || "None";
});
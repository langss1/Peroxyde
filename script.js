// Set the launch date (10 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 10);

function updateCountdown() {
    const now = new Date();
    const timeDifference = launchDate - now;

    // Calculate remaining days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Update the countdown display
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');

    // Stop the countdown when the time is up
    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h3>Launch Time!</h3>';
    }
}

// Update the countdown every minute
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

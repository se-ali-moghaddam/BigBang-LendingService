document.getElementById('wallet-tbl').addEventListener('click', updateCountdown(Math.floor(new Date('2025-01-01T00:00:00').getTime() / 1000)));

function formatTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

function updateCountdown(targetTimestamp) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const timeRemaining = targetTimestamp - currentTimestamp;

    if (timeRemaining > 0) {
        const formattedTime = formatTime(timeRemaining);
        document.getElementById('countdown').innerHTML = formattedTime;

        // Update the countdown every second
        setTimeout(() => {
            updateCountdown(targetTimestamp);
        }, 1000);
    } else {
        document.getElementById('countdown').innerHTML = 'Expired';
    }
}
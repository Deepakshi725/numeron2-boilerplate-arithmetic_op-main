// Iteration 8: Making scoreboard functional

const score_updated = localStorage.getItem('score');
document.getElementById("score-board").textContent = score_updated;

const play_again_button = document.getElementById('play-again-button');

// Add an event listener to the button for the 'click' event
play_again_button.addEventListener('click', function() {
    window.location.href = 'game.html';
});


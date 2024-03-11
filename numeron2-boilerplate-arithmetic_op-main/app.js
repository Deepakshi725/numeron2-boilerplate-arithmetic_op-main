// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

const button = document.querySelector('.play');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', function() {
    window.location.href = 'game.html';
});
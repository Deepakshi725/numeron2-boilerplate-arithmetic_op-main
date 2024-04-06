// Constants for timer duration and score
const TIMER_DURATION = 10; // in seconds
let score = 0;

// Function to generate random numbers and update the display
function updateNumbers() {
    const number1 = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    const number2 = Math.floor(Math.random() * 100); // Generate random number between 0 and 99

    document.getElementById('number1').textContent = number1;
    document.getElementById('number2').textContent = number2;
}

// Function to update result display based on the selected operation
function updateResult(selectedOperation) {
    const num1 = parseInt(document.getElementById('number1').textContent);
    const num2 = parseInt(document.getElementById('number2').textContent);
    const num3 = parseInt(document.getElementById('number3').textContent); // Get the result

    let result;

    switch (selectedOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = Math.floor(num1 / num2); // Ensure integer division
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            break;
    }

    // Compare the result with the generated result and return true if correct, false otherwise
    return num3 === result;
}

// Function to handle operation button clicks
function handleOperationClick(event) {
    const selectedOperation = event.target.id; // Get the id of the clicked image

    // Compare the selected operation with the generated operation and update the score
    if (updateResult(selectedOperation)) {
        score++; // Increment score if the operation is correct
    }

    updateNumbers(); // Generate new numbers
}

// Attach event listeners to each image button
const imageButtons = document.querySelectorAll('#buttons img');
imageButtons.forEach(button => {
    button.addEventListener('click', handleOperationClick);
});

// Function to start the timer
function startTimer() {
    let timeLeft = TIMER_DURATION;
    const timerDisplay = document.getElementById('timer');

    // Update the timer display every second
    const timerInterval = setInterval(() => {
        timerDisplay.textContent = `${timeLeft}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            // Redirect to the score page after the timer ends
            window.location.href = 'gameover.html?score=' + score; // Pass the score as a query parameter
        }
    }, 1000);
}

// Start the game by generating initial numbers and starting the timer
updateNumbers();
startTimer();
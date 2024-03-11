const timerDisplay = document.getElementById('timer');
const numberDisplay1 = document.getElementById('number1');
const numberDisplay2 = document.getElementById('number2');
const numberDisplay3 = document.getElementById('number3');
const operationButtons = document.getElementById('buttons');
const addBtn = document.getElementById('plus');
const subBtn = document.getElementById('minus');
const mulBtn = document.getElementById('mul');
const divBtn = document.getElementById('divide');
const modulusBtn = document.getElementById('modulus');

let timer = 20;
let score = 0;
let countdown;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

// Function to generate a random arithmetic operation
function generateRandomOperation() {
    const operations = ['+', '-', '*', '/', '%'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

// Function to update timer display
function updateTimer() {
    timerDisplay.textContent = timer;
}



// Function to update number displays
function updateNumbers() {
    const number1 = generateRandomNumber();
    const number2 = generateRandomNumber();
    numberDisplay1.textContent = number1;
    numberDisplay2.textContent = number2;
}

// Function to start the timer
function startTimer() {
    countdown = setInterval(() => {
        timer--;
        updateTimer();
        if (timer === 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 2000);
}

updateNumbersAndStartTimer();

function updateNumbersAndStartTimer() {
    updateNumbers();
    updateResult(); // Update the result after updating the numbers
    startTimer();
}

// Function to update result display
function updateResult() {
    const operation = generateRandomOperation();
    const number1 = parseInt(numberDisplay1.textContent);
    const number2 = parseInt(numberDisplay2.textContent);


    switch (operation) {
        case '+':
            numberDisplay3.textContent = number1 + number2;
            break;
        case '-':
            numberDisplay3.textContent = number1 - number2;
            break;
        case '*':
            numberDisplay3.textContent = number1 * number2;
            break;
        case '/':
            numberDisplay3.textContent = Math.floor(number1 / number2); // Ensure integer division
            break;
        case '%':
            numberDisplay3.textContent = number1 % number2;
            break;
        default:
            break;
    }

}

// Function to end the game
function endGame() {
    localStorage.setItem('score', score); // Store score in local storage
    window.location.href = 'gameover.html'; // Redirect to score page
}

function attachEventListener(){
    const imageButtons = document.querySelectorAll('#buttons img');
    imageButtons.forEach(button => {
    button.addEventListener('click', handleOperationClick);
});

}

function handleOptionClick(event) {
        const selectedOperation = event.target.id;
        const generatedResult = parseInt(document.getElementById('number3').textContent); // Get the current displayed result
        const number1 = parseInt(document.getElementById('number1').textContent); // Get the first number
        const number2 = parseInt(document.getElementById('number2').textContent); // Get the second number

        switch (selectedOperation) {
            case 'plus':
                if (number1 + number2 === generatedResult) {
                    score++;
                    updateNumbers();
                }
                break;
            case 'minus':
                if ( number1- number2 === generatedResult) {
                    score++;  
                    updateNumbers();                  
                }
                break;
            case 'mul':
                if (number1 * number2 === generatedResult) {
                    score++;
                    updateNumbers();
                }
                break;
            case 'divide':
                if (number1 / number2 === generatedResult) {
                    score++;
                    updateNumbers();
                }
                break;
            case 'modulus':
                if (number1 % number2 === generatedResult) {
                    score++;
                    updateNumbers();
                }
                break;
            default:
                break;
        }
        
}

updateNumbers();
startTimer();
attachEventListener();


/*----------------------------------------------------------------------
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional
-------------------------------------------*/

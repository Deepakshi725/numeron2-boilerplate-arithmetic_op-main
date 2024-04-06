
const timerDisplay = document.getElementById('timer');
const firstNumber = document.getElementById('number1');
const secondNumber = document.getElementById('number2');
const thirdNumber = document.getElementById('number3');
const additionbtn = document.getElementById('plus');
const subtractionbtn = document.getElementById('minus');
const multiplicationbtn = document.getElementById('mul');
const divisionbtn = document.getElementById('divide');
const modulobtn = document.getElementById('modulus');
const score = document.getElementById('score-board')


let timer = 40; //We can change timer range of our own choice by updating it here
let new_score = 0;

function generateRandom() {
    return Math.floor(Math.random()*100);
}

function generation_of_random_opn(){
    const operators = ['+','-','*','/','%'];
    const Index_random = Math.floor(Math.random() * operators.length);
    return operators[Index_random];
}

function updation_of_Timer() {
    timerDisplay.textContent = timer;
}

function updation_of_number() {
   const first = generateRandom();
   const second = generateRandom();
  // const third = updation_of_result();
   firstNumber.textContent = first;
   secondNumber.textContent = second;
   thirdNumber.textContent = updation_of_result();
}

function updation_of_result(){
    const operators= generation_of_random_opn();
    const first_number = parseInt(firstNumber.textContent);
    const second_number = parseInt(secondNumber.textContent);

    switch(operators){
        case '+':
            thirdNumber.textContent = first_number + second_number;
            break;
        case '-':
            thirdNumber.textContent = first_number - second_number;
            break;
        case '*':
            thirdNumber.textContent = first_number * second_number;
            break;
        case '/':
            thirdNumber.textContent = Math.floor(first_number / second_number);
            break;
        case '%':
            thirdNumber.textContent = first_number % second_number;
            break;
        default:
            break;   
    }
    return thirdNumber.textContent;
}



function startTimer() {
    updation_of_Timer();
    const countdown = setInterval(() => {
        timer--;
        updation_of_Timer();
        if (timer === 0) {
            clearInterval(countdown);
            end_of_Game();
        }
    }, 800);

}

function end_of_Game() {
     localStorage.setItem('score', new_score);
     window.location.href = 'gameover.html'; // Redirect to score page
 }



function check_operation(selected_operator){
    const result = parseInt(document.getElementById('number3').textContent);
    const number1 = parseInt(document.getElementById('number1').textContent);
    const number2 = parseInt(document.getElementById('number2').textContent);

    switch(selected_operator) {
        case '+':
            if(number1 + number2 === result){
            new_score++;
            }
        break;
        case '-':
            if(number1 - number2 === result){
            new_score++;
            }
        break;
        case '*':
            if(number1 * number2 === result){
            new_score++;
            }
        break;
        case '/':
            if(number1 / number2 === result){
            new_score++;
            }
        break;
        case '%':
            if(number1 % number2 === result){
            new_score++;
            }
        break;
        default:
            break;
    }
    updation_of_Timer();
    updation_of_number();
}
updation_of_number();

additionbtn.addEventListener('click', () => check_operation('+'));
subtractionbtn.addEventListener('click', () => check_operation('-'));
multiplicationbtn.addEventListener('click', () => check_operation('*'));
divisionbtn.addEventListener('click', () => check_operation('/'));
modulobtn.addEventListener('click', () => check_operation('%'));

startTimer();



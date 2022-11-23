const display = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top')

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const numArray = [zero, one, two, three, four, five, six, seven, eight, nine];

for(let i = 0; i < numArray.length; i++)
{
    numArray[i].addEventListener('click', () => {
        if(display.textContent.length < 20) {
        display.textContent += `${i}`;
        displayTop.textContent += `${i}`;
        }
    });
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if(display.textContent.length < 20){
display.textContent += '.';
displayTop.textContent += '.';
    }
});

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    display.textContent = "";
    calculate(displayTop, ' + ' );
    
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    display.textContent = "";
    calculate(displayTop, ' - ' );

});

const star = document.querySelector('.star');
star.addEventListener('click', () => {
    display.textContent = "";
    calculate(displayTop, ' * ' );

});

const slash = document.querySelector('.slash');
slash.addEventListener('click', () => {
    display.textContent = "";
    calculate(displayTop, ' / ' );

});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
display.textContent = "";
displayTop.textContent = "";
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayAnswer(displayTop);
});


function calculate(sumDisplay, operator)
{
    let currentSum = sumDisplay.textContent.split(' ');
    
    if(currentSum.length != 3) {
        sumDisplay.textContent += operator;
        return;
    } 
    else if(currentSum[2] == "" ){
        return;
    } else {
        let result = operate(currentSum[0], currentSum[1], currentSum[2]);
        sumDisplay.textContent = result + operator;
    }
}

function displayAnswer(sumDisplay) {
    let currentSum = sumDisplay.textContent.split(' ');
    let result = operate(currentSum[0], currentSum[1], currentSum[2]);
    display.textContent = "= " + result;
}


function operate(num1, operator, num2) {
    let answer;
    if (operator == '+') {
        answer = add(num1, num2);
    } else if (operator == '-') {
        answer = subtract(num1, num2)
    } else if (operator == '*') {
        answer = multiply(num1, num2)
    } else if (operator == '/') {
        answer = divide(num1, num2)
    }
    return answer;
}


function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// function toTop(display) {
//     displayTop.textContent += display.textContent;
//     display.textContent = "";
// }


const display = document.querySelector('.display-bottom');
display.textContent = 0;
const displayTop = document.querySelector('.display-top');

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
            numbersChecker();
        display.textContent += `${i}`;
        displayTop.textContent += `${i}`;
        }
    });
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if(display.textContent.includes('.')) {
        return;
    }
    else if(display.textContent.length < 20){
display.textContent += '.';
displayTop.textContent += '.';
    }
});

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    operationsChecker(' + ');
    calculate(displayTop, ' + ' );
    
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    operationsChecker(' - ');
    calculate(displayTop, ' - ' );

});

const star = document.querySelector('.star');
star.addEventListener('click', () => {
    operationsChecker(' * ');
    calculate(displayTop, ' * ' );

});

const slash = document.querySelector('.slash');
slash.addEventListener('click', () => {
    operationsChecker(' / ')
    calculate(displayTop, ' / ' );

});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    displayAnswer(displayTop);
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
display.textContent = 0;
displayTop.textContent = "";
});


function operationsChecker(operator) 
{
    if(display.textContent == "0") {
        displayTop.textContent = 0 + operator;
    }
}

function numbersChecker() 
{
    if(display.textContent == 0) {
        display.textContent = "";
    }
}

// function equalsChecker() 
// {
//     if(typeof displayTop == 'number')
// }

function calculate(sumDisplay, operator)
{
    let currentSum = sumDisplay.textContent.split(' ');  
    display.textContent = "";
    if(currentSum.length != 3) {
        sumDisplay.textContent += operator;
        return;
    } 
    else if(currentSum[2] == "" ){
        currentSum[1] = operator;
        currentSum.pop();
        sumDisplay.textContent = currentSum.join("");
        return;
    } else {
        let result = operate(currentSum[0], currentSum[1], currentSum[2]);
        sumDisplay.textContent = result + operator;
    }
}

function displayAnswer(sumDisplay) {
    let currentSum = sumDisplay.textContent.split(' ');
    if(currentSum.length != 3) {
        return;
    }
    if(currentSum[2] == "" ){
        display.textContent = "= " + currentSum[0];
        return;
    }
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
    return +((num1 * 10) + (num2 * 10)) / 10;
}

function subtract(num1, num2) {
    return (num1 * 10 - num2 * 10) / 10;
}

function multiply(num1, num2) {
    return ((num1 * 10) * (num2)) / 10;
}

function divide(num1, num2) {
    return ((num1 * 10) / (num2)) / 10;
}



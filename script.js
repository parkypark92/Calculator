const display = document.querySelector('.display');

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
        if(display.textContent.length < 23) {
        display.textContent += `${i}`;
        }
    });
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if(display.textContent.length < 22){
display.textContent += '.';
    }
});

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    if(display.textContent.length < 20) {
    display.textContent += " + "
    }
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    if(display.textContent.length < 20) {
    display.textContent += " - ";
    }
});

const star = document.querySelector('.star');
star.addEventListener('click', () => {
    if(display.textContent.length < 20) {
    display.textContent += " * "
    }
});

const slash = document.querySelector('.slash');
slash.addEventListener('click', () => {
    if(display.textContent.length < 20) {
    display.textContent += " / ";
    }
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () =>
display.textContent = "");

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
let calcArray = display.textContent.split(' ');
display.textContent = calculate(calcArray);
});


function calculate(array)
{
    while(array.length > 1) {
    let i = array.findIndex(el => el == '*' || el == '/' || el == '+' || el == '-');
    let currentSum = array.splice(i - 1, 3);
    let result = operate(currentSum[0], currentSum[1], currentSum[2])
    array.splice(i - 1, 0, result);
    }
  return array;
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




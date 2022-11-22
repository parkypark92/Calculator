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
    numArray[i].addEventListener('click', () =>
    display.textContent += `${i}`);
}

const dot = document.querySelector('.dot');
dot.addEventListener('click', () =>
display.textContent += '.');
const clear = document.querySelector('.clear');
clear.addEventListener('click', () =>
display.textContent = "");

const plus = document.querySelector('.plus');
plus.addEventListener('click', () =>
display.textContent += " + ");
const minus = document.querySelector('.minus');
minus.addEventListener('click', () =>
display.textContent += " - ");
const star = document.querySelector('.star');
star.addEventListener('click', () =>
display.textContent += " * ");
const slash = document.querySelector('.slash');
slash.addEventListener('click', () =>
display.textContent += " / ");
const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
let calcArray = display.textContent.split(' ');
calculate(calcArray);
});



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

function calculate(array)
{
    while(array.length > 1) {
    let i = array.findIndex(el => el == '*' || el == '/' || el == '+' || el == '-');
    let currentSum = array.splice(i - 1, 3);
    let result = operate(currentSum[0], currentSum[1], currentSum[2])
    array.splice(i - 1, 0, result);
    }
  console.log(array);
}

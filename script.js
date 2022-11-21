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
display.textContent += "+");
const minus = document.querySelector('.minus');
minus.addEventListener('click', () =>
display.textContent += "-");
const star = document.querySelector('.star');
star.addEventListener('click', () =>
display.textContent += "*");
const slash = document.querySelector('.slash');
slash.addEventListener('click', () =>
display.textContent += "/");
const equals = document.querySelector('.equals');


function add(num1, num2) {
    return num1 + num2;
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

function operate(operator, num1, num2) {
    let answer;
    if (operator == 'plus') {
        answer = add(num1, num2);
    } else if (operator == 'minus') {
        answer = subtract(num1, num2)
    } else if (operator == 'star') {
        answer = multiply(num1, num2)
    } else if (operator == 'slash') {
        answer = divide(num1, num2)
    }
    return answer;
}

console.log(parseInt('1', 10))
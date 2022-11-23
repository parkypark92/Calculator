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
        if(display.textContent.length < 30) {
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
    toTop(display);
    calculate(displayTop, ' + ' );
    
});

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    toTop(display);
    calculate(displayTop, ' - ' );

});

const star = document.querySelector('.star');
star.addEventListener('click', () => {
    toTop(display);
    calculate(displayTop, ' * ' );

});

const slash = document.querySelector('.slash');
slash.addEventListener('click', () => {
    toTop(display);
    calculate(displayTop, ' / ' );

});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
display.textContent = "";
displayTop.textContent = "";
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
let calcArray = display.textContent.split(' ');
display.textContent = calculate(calcArray);
});


function calculate(sumDisplay, operator)
{
    let currentSum = sumDisplay.textContent.split(' ');
    if(currentSum.length != 3) {
        sumDisplay.textContent += operator;
        return;
    } else {
        let result = operate(currentSum[0], currentSum[1], currentSum[2]);
        sumDisplay.textContent += operator;
        display.textContent = '= ' + result;


    }
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

function toTop(display) {
    displayTop.textContent += display.textContent;
    display.textContent = "";
}


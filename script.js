//display variables and defaults
const display = document.querySelector('.display-bottom');
const displayTop = document.querySelector('.display-top');
let equalsAnswer = 0;

//button variables
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

const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const power = document.querySelector('.power');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const star = document.querySelector('.star');
const slash = document.querySelector('.slash');
const equals = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const answer = document.querySelector('.answer');



//button events
getClickEventsForNumbers();
getKeyEventsForNumbers();

plus.addEventListener('click', () => {
    operationsChecker(' + ');
    calculate(displayTop, ' + ');
});

document.addEventListener('keypress', e => {
    if (e.key == '+') {
        operationsChecker(' + ');
        calculate(displayTop, ' + ');
    }
});

minus.addEventListener('click', () => {
    operationsChecker(' - ');
    calculate(displayTop, ' - ');
});

document.addEventListener('keypress', e => {
    if (e.key == '-') {
        operationsChecker(' - ');
        calculate(displayTop, ' - ');
    }
});

star.addEventListener('click', () => {
    operationsChecker(' * ');
    calculate(displayTop, ' * ');
});

document.addEventListener('keypress', e => {
    if (e.key == '*') {
        operationsChecker(' * ');
        calculate(displayTop, ' * ');
    }
});

slash.addEventListener('click', () => {
    operationsChecker(' / ');
    calculate(displayTop, ' / ');
});

document.addEventListener('keypress', e => {
    if (e.key == '/') {
        operationsChecker(' / ');
        calculate(displayTop, ' / ');
    }
});

power.addEventListener('click', () => {
    operationsChecker(' ^ ');
    calculate(displayTop, ' ^ ');
});

document.addEventListener('keypress', e => {
    if (e.key == '^') {
        operationsChecker(' ^ ');
        calculate(displayTop, ' ^ ');
    }
});

equals.addEventListener('click', () => {
    displayAnswer(displayTop);
});

document.addEventListener('keypress', e => {
    if (e.key == '=') {
        displayAnswer(displayTop);
    }
});

dot.addEventListener('click', dotChecker);

document.addEventListener('keypress', e => {
    if (e.key == '.') {
        dotChecker();
    }
});

answer.addEventListener('click', answerChecker);

document.addEventListener('keypress', e => {
    if (e.key == 'a') {
        answerChecker();
    }
});


backspace.addEventListener('click', deleteLast);

document.addEventListener('keydown', e => {
    if (e.key === 'Backspace') {
        deleteLast();
    }
});

clear.addEventListener('click', () => {
    display.textContent = "";
    displayTop.textContent = "";
});

document.addEventListener('keypress', e => {
    if (e.key == 'c') {
        display.textContent = "";
        displayTop.textContent = "";
    }
});


//functions
function getClickEventsForNumbers() {
    for (let i = 0; i < numArray.length; i++) {
        numArray[i].addEventListener('click', () => {
            if (display.textContent.length < 20) {
                numbersChecker();
                display.textContent += `${i}`;
                displayTop.textContent += `${i}`;
            }
        });
    }
}

function getKeyEventsForNumbers() {
    for (let i = 0; i < numArray.length; i++) {
        document.addEventListener('keypress', e => {
            if (e.key == i) {
                if (display.textContent.length < 20) {
                    numbersChecker();
                    display.textContent += `${i}`;
                    displayTop.textContent += `${i}`;
                }
            }
        });
    }
}



function operationsChecker(operator) {
    if (display.textContent == "" && displayTop.textContent == "") {
        displayTop.textContent = 0 + operator;
    }
}



function numbersChecker() {
    if (display.textContent.includes('=')) {
        display.textContent = "";
        displayTop.textContent = "";
    }
    if (display.textContent == '0' && displayTop.textContent == '0') {
        display.textContent = "";
        displayTop.textContent = "";
    }
}


function dotChecker() {
    let currentSum = displayTop.textContent.split(' ');
    if (display.textContent.includes('.')) {
        return;
    } else if (currentSum.length == 1 && currentSum[0].includes('.')) {
        return;
    } else if (currentSum.length == 3 && currentSum[2].includes('.')) {
        return;
    }
    else if (display.textContent.length < 20) {
        display.textContent += '.';
        displayTop.textContent += '.';
    }
}

function answerChecker() {
    display.textContent = "";
    let currentSum = displayTop.textContent.split(' ');
    if (currentSum[2] == "") {
        display.textContent += equalsAnswer;
        displayTop.textContent += equalsAnswer;
    } else {
        display.textContent = equalsAnswer;
        displayTop.textContent = equalsAnswer;
    }

}

function deleteLast() {
    let currentSum = displayTop.textContent.split(' ');
    if (currentSum[2] == "") {
        return;
    } else if (display.textContent.includes('=')) {
        return;
    }
    display.textContent = display.textContent.slice(0, -1);
    displayTop.textContent = displayTop.textContent.slice(0, -1);
}

function calculate(sumDisplay, operator) {
    let currentSum = sumDisplay.textContent.split(' ');
    display.textContent = "";
    if (currentSum.length != 3) {
        sumDisplay.textContent += operator;
        return;
    }
    else if (currentSum[2] == "") {
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
    if (currentSum.length != 3) {
        return;
    }
    else if (currentSum[2] == "") {
        return;
    }
    equalsAnswer = operate(currentSum[0], currentSum[1], currentSum[2]);
    display.textContent = "= " + equalsAnswer;
}


function operate(num1, operator, num2) {
    let result;
    if (operator == '+') {
        result = add(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    } else if (operator == '*') {
        result = multiply(num1, num2);
    } else if (operator == '/') {
        result = divide(num1, num2);
    } else if (operator == '^') {
        result = powerOf(num1, num2);
    }

    if (isNaN(result)) {
        return 'Error';
    }
    console.log(result);
    return result;
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

function powerOf(num1, num2) {
    return num1 ** num2;
}

function currentSum(equation) {
    console.log(equation);
    return equation.textContent.split(' ');
}


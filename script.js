function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2) 
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function operate(operator, num1, num2)
{
    let answer;
    if(operator == 'plus'){
        answer = add(num1, num2);
    } else if(operator == 'minus') {
        answer = subtract(num1, num2)
    } else if(operator == 'star') {
        answer = multiply(num1, num2)
    }else if(operator == 'slash') {
        answer = divide(num1, num2)
    }
    return answer;
}

console.log(operate('plus', 12, 2))
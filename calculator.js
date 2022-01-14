const functions = {
    1: (firstNumber, secondNumber) => firstNumber + secondNumber, 
    2: (firstNumber, secondNumber) => firstNumber - secondNumber, 
    3: (firstNumber, secondNumber) => firstNumber * secondNumber, 
    4: (firstNumber, secondNumber) => firstNumber / secondNumber
};

const calculate = (firstNumber, secondNumber, func) => func(firstNumber, secondNumber);

const updateResult = (result) => {
    const htmlTag = document.querySelector(".result");
    let resultHTML = `<br>The result of your calculation is ${result}`;
    htmlTag.innerHTML = resultHTML;
}

const menu = () => {
    const options = ['1', '2', '3', '4'];
    let input;
    do {
        const greet = "Hello! \nSelect the option you wish to use \n1: Sum \n2: Subtraction \n3: Multiplication \n4: Division";
        input = prompt(greet);
    } while (!options.includes(input));
    let firstNumber;
    do {
        firstNumber = prompt('Type your first number');
    } while (isNaN(firstNumber));
    firstNumber = Number(firstNumber);
    let secondNumber 
    do {
        secondNumber = prompt('Type your second number');
    } while (isNaN(secondNumber));
    secondNumber = Number(secondNumber);
    updateResult(calculate(firstNumber, secondNumber, functions[input]));
    //alert(`The result is ${calculate(firstNumber, secondNumber, functions[input])}`);
    return 'Calculation completed';
}


// Function to check if a string is a valid binary number
function isValidBinary(binaryString) {
    // Regular expression to match a binary number (0 or 1)
    return /^[01]+$/.test(binaryString);
}
//Test Function 
console.log(isValidBinary('00110000')); //output: true
// Function to perform calculations on binary numbers
function calculate() {
    // Get the values of the two input fields and the operator
    let num1Str = document.getElementById('num1').value;
    let num2Str = document.getElementById('num2').value;
    let operator = document.getElementById('operator').value;
    let decimalResultField = document.getElementById('decimal-result');
    // Get the error message and result fields
    let errorMessage = document.getElementById('error-message');
    let resultField = document.getElementById('result');

    // Clear previous error message
    errorMessage.textContent = '';
    resultField.value = '';
    decimalResultField.value = '';

    // Check if the input strings are valid binary numbers
    if (!isValidBinary(num1Str) || !isValidBinary(num2Str)) {
        errorMessage.textContent = 'Veuillez entrer des nombres binaires valides.';
        return;
    }

    // Convert the input strings to integers
    let num1 = parseInt(num1Str, 2);
    let num2 = parseInt(num2Str, 2);

    // Check for division by zero
    if (operator === '/' && num2 === 0) {
        errorMessage.textContent = 'Division par zéro non permise.';
        return;
    }

    // Perform the calculation based on the operator
    let result;
    let decimalResult;
    switch (operator) {
        case '+':
            decimalResult = (num1 + num2);
            result = decimalResult.toString(2);
            break;
        case '-':
            decimalResult = (num1 - num2);
            result = decimalResult.toString(2);
            break;
        case '*':
            decimalResult = (num1 * num2);
            result = decimalResult.toString(2);
            break;
        case '/':
            decimalResult = (num1 / num2);
            result = decimalResult.toString(2);
            break;
        default:

            errorMessage.textContent = 'Opérateur non valide.';
            return;
    }

    // Display the result
    resultField.value = result;
    decimalResultField.value = decimalResult;
}
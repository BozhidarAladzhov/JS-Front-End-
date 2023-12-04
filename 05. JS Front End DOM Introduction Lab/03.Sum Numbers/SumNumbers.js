function calc() {
    
    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);
    let result = firstNumber + secondNumber

    let resultArea = document.getElementById('sum');
    resultArea.value = result;

}

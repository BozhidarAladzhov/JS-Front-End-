function calculator (num1, num2, num3){
    let result = 0;

    sum(num1, num2);
    subtract(result, num3);
    
    function sum (num1, num2){
        result = num1 + num2
    }

    function subtract (num1, num3){
        result = num1 - num3
    }

    console.log(result);

}
calculator(23,6,10)
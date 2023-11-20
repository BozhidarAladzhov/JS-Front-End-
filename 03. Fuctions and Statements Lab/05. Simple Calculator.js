function calculator (num1, num2, operator){
    
    
    switch (operator){
        case "multiply":
            multiply(num1,num2)
            break
        case "divide":
            divide(num1,num2)
            break
        case "add":
            add(num1,num2)
            break
        case "subtract":
            subtract(num1,num2)
            break
    }
    function multiply(a,b){
        console.log(a * b);
    }
    function divide(a,b){
        console.log(a / b);
    }
    function add(a,b){
        console.log(a + b);
    }
    function subtract(a,b){
        console.log(a - b);
    }

}

calculator(5,5,'multiply')
calculator(50,13,'subtract')
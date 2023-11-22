function factorialDivision (num1, num2){
    
    

    function calFact(n){
        if(n==0){
            return 1;
        }else{
            return n*calFact(n-1);
        }
    }

    let fact1 = calFact(num1);    
    let fact2 = calFact(num2);
    

    console.log((fact1/fact2).toFixed(2));
    
}


factorialDivision(5,2)
factorialDivision(6,2)
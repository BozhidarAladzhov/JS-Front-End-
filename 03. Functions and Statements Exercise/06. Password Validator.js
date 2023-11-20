function validPasword (password){

    function isValidLength (text){
        return text.length >= 6 && text.length <=10;
    }

    function isAlphanumeric (text){
        let regex = /^[a-zA-Z0-9]+$/;
        let isCorrect = regex.test(text);
        return isCorrect;
    }

    function countDigits (text){
        let digitsCounter = 0;
        for (const symbol of text) {
            if(!isNaN(symbol)){
                digitsCounter++
            }
        }

        return digitsCounter >= 2;
    }



    if (!isValidLength(password)){
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isAlphanumeric(password)){
        console.log("Password must consist only of letters and digits");
    }
    if (!countDigits (password)){
        console.log("Password must have at least 2 digits");
    }

    if (isValidLength(password) &&
     isAlphanumeric(password) &&
     countDigits(password)){
        console.log("Password is valid");
     }

}

validPasword('logIn');
validPasword('MyPass123');
validPasword('Pa$s$s');
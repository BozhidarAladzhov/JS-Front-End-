function sumOfDigits (number){

    let sum = 0;
    let stringNumber = number.toString();

    for (let index = 0; index < stringNumber.length; index++) {
        let currentNumOfIndex = stringNumber.charAt(index);
        sum = sum +  Number(currentNumOfIndex);
    }

    console.log(sum)
}

sumOfDigits(245678)
sumOfDigits(97561)
sumOfDigits(543)
function palindromNumber (numsArray){

    function isPalindrom (number){

        let numAsString = number.toString();
        let reversedNum = numAsString.split('').reverse().join('');

        return numAsString === reversedNum;
    }

    for (const number of numsArray) {
        console.log(isPalindrom(number));
    }
}

palindromNumber([123,323,421,121])
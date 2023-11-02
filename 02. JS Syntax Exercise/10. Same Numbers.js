function sameChars (number){

    let sum = 0;
    let stringNumber = number.toString();
    let isSameChar = true;

    for (let index = 0; index < stringNumber.length; index++) {
        let currentNumOfIndex = stringNumber.charAt(index);
        sum = sum +  Number(currentNumOfIndex);

        if (stringNumber[index] != stringNumber[0]){
            isSameChar = false;
        }
    }
    console.log(isSameChar)
    console.log(sum)
}

sameChars(2222222)
sameChars(1234)
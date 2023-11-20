function oddAndEvenSum (number){

    let numberAsString = number.toString();
    let oddSum = 0;
    let evenSum =0;

    for (let index = 0; index < numberAsString.length; index++) {
        let currentElement = Number(numberAsString[index]);
        if (currentElement % 2 == 0){
            evenSum += currentElement
        } else {
            oddSum += currentElement
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
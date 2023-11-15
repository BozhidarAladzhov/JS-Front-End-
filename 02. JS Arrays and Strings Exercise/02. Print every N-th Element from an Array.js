function printEveryNthElement (array, step){
    let output = [];
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index+=step) {
        output.push(array[index])
        
    }

    return output;
}

printEveryNthElement(['5', '20', '31', '4', '20'],2)
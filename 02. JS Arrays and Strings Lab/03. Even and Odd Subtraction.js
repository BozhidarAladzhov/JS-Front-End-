function evenOrOdd (array){
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = 0; index < array.length; index++) {
        let currentElement = array[index];
        if (currentElement % 2 == 0){
            sumEven += currentElement;
        }else {
            sumOdd += currentElement;
        }        
    }

    console.log(sumEven - sumOdd)
}

evenOrOdd([1,2,3,4,5,6]);
evenOrOdd([3,5,7,9]);
evenOrOdd([2,4,6,8,10]);
function reverseArray(length, array) {
    let newArray = [];
    for (let index = 0; index < length; index++) {
        let elementToTake = array[index];
        newArray.push(elementToTake);

    }

    let reverseArray = newArray.reverse();

    console.log(reverseArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
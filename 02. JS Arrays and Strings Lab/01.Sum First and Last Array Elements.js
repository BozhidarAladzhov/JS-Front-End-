function sumFirstAndLast (array) {

    let first = array.shift();
    let last = array.pop();
    console.log(first + last);
    
}

sumFirstAndLast([20,30,40]);
sumFirstAndLast([10,17,22,33]);
sumFirstAndLast([11,58,69]);
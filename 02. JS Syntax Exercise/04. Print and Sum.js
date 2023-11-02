function solve(num1, num2) {

    let sum = 0;
    let str = "";

    for (let index = num1; index <= num2; index++) {
        sum += index;
        str += index + " "
    }

    console.log(str)
    console.log(`Sum: ${sum}`);


}

solve(5, 10)
solve(0, 26)
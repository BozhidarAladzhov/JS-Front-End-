function multiplicationTable (number){

    for (let index = 1; index <= 10; index++) {
        let result = number * index
        console.log(`${number} X ${index} = ${result}`)                 
    }
}

multiplicationTable(5)
multiplicationTable(2)
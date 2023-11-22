function nXnMatrix (rowsCols){
    
    function printRow(num){
        let singleRow = (num.toString() + ' ').repeat(num)
        return(singleRow);
    }

    for (let currentRow = 1; currentRow<= rowsCols; currentRow++){
        console.log(printRow(rowsCols));
    }
}

nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2)
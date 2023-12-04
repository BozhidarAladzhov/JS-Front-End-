function sumTable() {
    let rows = document.querySelectorAll("table tr td");
    let totalSum = 0;

    for (let index = 0; index < rows.length-1; index++) {
       if (index % 2 !== 0){
            let cost = Number(rows[index].textContent);
            totalSum += cost;
            
            
       }
        
    }

    document.getElementById('sum').textContent = totalSum;


}
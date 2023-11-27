function piccolo (input) {
    let parking = [];

    for (const car of input) {
        let direction = car.split(", ")[0];
        let carNumber = car.split(", ")[1];

        if (direction === "IN" && !parking.includes(carNumber)){
            parking.push(carNumber);
        }else if (direction === "OUT" && parking.includes(carNumber)){
            let parkSpot = parking.indexOf(carNumber);
            delete parking[parkSpot];
            //parking.splice(parkSpot, 1);
        }
    }

    if (parking.length > 0){

        let sortedNumbers = parking.sort((a,b)=>a.localeCompare(b));

        sortedNumbers.forEach(n=> console.log(n));

    }else {
        console.log("Parking Lot is Empty");
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
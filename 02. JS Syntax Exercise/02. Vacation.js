function calculator(groupSize, groupType, weekDay) {

    let pricePerPerson = 0;

    if (groupType == "Students") {
        switch (weekDay) {
            case "Friday":
                pricePerPerson = 8.45;
                break;
            case "Saturday":
                pricePerPerson = 9.80;
                break;
            case "Sunday":
                pricePerPerson = 10.46;
                break;
        }
    } else if (groupType == "Business") {
        switch (weekDay) {
            case "Friday":
                pricePerPerson = 10.90;
                break;
            case "Saturday":
                pricePerPerson = 15.60;
                break;
            case "Sunday":
                pricePerPerson = 16.00;
                break;
        }
    } else if (groupType == "Regular") {
        switch (weekDay) {
            case "Friday":
                pricePerPerson = 15;
                break;
            case "Saturday":
                pricePerPerson = 20;
                break;
            case "Sunday":
                pricePerPerson = 22.50;
                break;
        }
    }

    let totalPrice = groupSize * pricePerPerson;

    if (groupSize >= 30 && groupType == "Students"){
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (groupSize >= 100 && groupType == "Business"){
        totalPrice = (groupSize - 10) * pricePerPerson;
    } else if (groupSize >= 10 && groupSize <= 20 && groupType == "Regular"){
        totalPrice = totalPrice - (totalPrice * 0.05);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)


}

calculator(30, "Students", "Sunday")
calculator(40, "Regular", "Saturday")
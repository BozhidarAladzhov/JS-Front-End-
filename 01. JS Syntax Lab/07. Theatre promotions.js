function ticketPromotion(day, personAge) {

    let ticketPrice = 0;

    if (personAge >= 0 && personAge <= 18) {
        switch (day) {
            case "Weekday":
                ticketPrice = 12;
                break;
            case "Weekend":
                ticketPrice = 15;
                break;
            case "Holiday":
                ticketPrice = 5;
                break;
        }
    } else if (personAge > 18 && personAge <= 64) {
        switch (day) {
            case "Weekday":
                ticketPrice = 18;
                break;
            case "Weekend":
                ticketPrice = 20;
                break;
            case "Holiday":
                ticketPrice = 12;
                break;
        }         
    } else if (personAge > 64 && personAge <= 122) {
        switch (day) {
            case "Weekday":
                ticketPrice = 12;
                break;
            case "Weekend":
                ticketPrice = 15;
                break;
            case "Holiday":
                ticketPrice = 10;
                break;
        }
    }

    if (personAge < 0 || personAge > 122){
        console.log("Error!")
    }else {
        console.log(`${ticketPrice}$`)
    }
}

ticketPromotion("Weekday", 42)
ticketPromotion("Holiday", -12)
ticketPromotion("Holiday", 15)
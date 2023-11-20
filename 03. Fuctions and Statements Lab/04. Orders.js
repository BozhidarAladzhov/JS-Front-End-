function totalOrderPrice (order, quantity){
    let totalPrice = 0;
    switch (order){
        case "coffee":
            totalPrice = quantity * 1.50;
            break
        case "water":
            totalPrice = quantity * 1.00;
            break
        case "coke":
            totalPrice = quantity * 1.40;
            break
        case "snacks":
            totalPrice = quantity * 2.00;
            break
    }
    console.log(totalPrice.toFixed(2));
}
totalOrderPrice("water", 5)
totalOrderPrice("coffee", 2)
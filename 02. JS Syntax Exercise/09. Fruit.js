function moneyForFruit (fruit, weight, price){

    let weightToKilograms = weight / 1000;
    let sumToPay = price * weightToKilograms;

    console.log(`I need $${sumToPay.toFixed(2)} to buy ${weightToKilograms.toFixed(2)} kilograms ${fruit}.`)
}

moneyForFruit('orange', 2500, 1.80)
moneyForFruit('apple', 1563, 2.35)
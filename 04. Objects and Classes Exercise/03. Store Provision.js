function storeProvision (currentStocks, orderedProducts){
    const stocks = {};

    for (let index = 0; index < currentStocks.length; index+=2) {
        let product = currentStocks[index];
        let quantity = Number(currentStocks[index+1]);

        if (!stocks.hasOwnProperty(product)){
            stocks[product] = quantity;
        }else {
            stocks[product] += quantity;
        }
        
    }

    for (let index = 0; index < orderedProducts.length; index+=2) {
        let product = orderedProducts[index];
        let quantity = Number(orderedProducts[index+1]);

        if (!stocks.hasOwnProperty(product)){
            stocks[product] = quantity;
        }else {
            stocks[product] += quantity;
        }        
    }

    for (const stock in stocks) {
        console.log(`${stock} -> ${stocks[stock]}`);
    }   

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
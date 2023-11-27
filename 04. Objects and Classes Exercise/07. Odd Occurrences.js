function oddOccurences(input) {

    input = input.toLowerCase();
    let arrayOfElements = input.split(" ");

    let map = new Map();

    arrayOfElements.forEach(element => {

        if (map.has(element)) {
            let oldValue = map.get(element);
            let newValue = oldValue + 1;
            map.set(element, newValue);
        } else {
            map.set(element, 1);
        }
    });

    let resultArray = [];

    map.forEach((value, key) => {
        if ( value % 2 !== 0){
            resultArray.push(key)
        }
    })

    console.log(resultArray.join(" "));

}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
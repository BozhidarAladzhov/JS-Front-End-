function convertToObject (jsonObject){
    let person = JSON.parse(jsonObject);

    for (const entry of Object.entries(person)) {
       const [key, value] = entry;
       console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
function convertToJson (firstName, lastName, hairColor){
    let person = {};
    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let personToJson = JSON.stringify(person)
    console.log(personToJson);
}

convertToJson('George', 'Jones', 'Brown')
convertToJson('Peter', 'Smith', 'Blond')
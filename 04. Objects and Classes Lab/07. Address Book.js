function addresBook (array){

    let addresBook = {};

    for (const element of array) {
        const [name, addres] = element.split(":");
        addresBook[name] = addres;
        
    }

    const peopleNames = Object.entries(addresBook);
    const sortedPeople = peopleNames.sort();
    
    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`);
    }

}

addresBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
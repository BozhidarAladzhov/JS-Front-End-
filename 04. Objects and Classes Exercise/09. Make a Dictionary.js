function makeDictionary(input){

    let dictonary = {};
    let jsonArrays = JSON.parse(input);

    for (const element of jsonArrays) {        

        let currentObject = element;

        for (const entry of Object.entries(currentObject)) {
            const [term, definition] = entry;            

            if (!dictonary.hasOwnProperty(term)){
                dictonary[term] = definition;
            }else {
                dictonary[term] = definition
            }
        }
    }

    for (const object in dictonary) {
        console.log(`Term: ${object.term} => Definition: ${object.definition}`);
    }

}

makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
function meetings (array){
    const meetings = {};
    for (const element of array) {

        const [day, name] = element.split(" ");

        if (!meetings.hasOwnProperty(day)){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }else {
            
            console.log(`Conflict on ${day}!`);
        }        
    }

    
    Object.keys(meetings).forEach((day) => {
        console.log(`${day} -> ${meetings[day]}`);
    });
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
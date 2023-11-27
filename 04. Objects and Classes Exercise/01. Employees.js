function employeesList (array){
    let employees = [];

    for (const employee of array) {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    }   
}


employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
employeesList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])
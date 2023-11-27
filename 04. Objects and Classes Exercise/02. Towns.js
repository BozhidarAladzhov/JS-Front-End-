function towns (array) {
    
    for (const element of array) {
        let townInfo = element.split(" | ");
        const [town, latitude, longitude] = townInfo
        let townObj = {};
        townObj.town = town;
        townObj.latitude = Number(latitude).toFixed(2);
        townObj.longitude = Number(longitude).toFixed(2);
        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])

towns(['Plovdiv | 136.45 | 812.575'])
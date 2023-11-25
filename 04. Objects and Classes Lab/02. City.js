function getObjectData (obj){
    const { name, area, population, country, postcode } = obj;
        for (const entry of Object.entries(obj)) {
            const [key, value] = entry;
            console.log(`${key} -> ${value}`);
        }
}

getObjectData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

getObjectData({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)
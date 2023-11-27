function registerForHeroes (array){

    let register = [];

    for (const input of array) {       

        let [heroName, heroLevel, items] = input.split(" / ");
        let hero = {
            heroName,
            heroLevel: Number(heroLevel),
            items
        };
        register.push(hero);
    }

    register.sort((a,b) => a.heroLevel - b.heroLevel);

    for (const hero of register) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items}`);
    }
}

registerForHeroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
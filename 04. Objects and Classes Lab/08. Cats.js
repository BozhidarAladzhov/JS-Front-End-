function cats (array){
    let cats = [];

    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (const cat of array) {
        const catInfo = cat.split(" ");
        const [name, age] = catInfo;
        const newCat = new Cat (name, age)
        newCat.meow();
        cats.push(newCat)
    }
}


cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])
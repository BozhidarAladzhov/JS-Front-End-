function stringSubsting (word, text) {

    let wordsArray = text.toLowerCase().split(" ");

    let output = `${word} not found!`;

    for (let index = 0; index < wordsArray.length; index++) {
        
        if (wordsArray[index] === word){
            output = word;
        }
        
    }

    
    console.log(output);
}

stringSubsting('javascript','JavaScript is the best programming language')
stringSubsting('python','JavaScript is the best programming language')
function repeatString (text, count){

    let result = '';
    for (let index = 1; index <= count; index++) {
        result += text        
    }
    console.log(result);
}
repeatString("abc", 3)
repeatString("String", 2)
function charsReader (char1, char2){

    let result = '';
    let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

    for (let currentCode = start+1; currentCode < end; currentCode++) {
        const currentChar = String.fromCharCode(currentCode)
        result += `${currentChar} `
        
    }

    console.log(result);
}

charsReader('a', 'd');
charsReader('#',':');
charsReader('C','#');
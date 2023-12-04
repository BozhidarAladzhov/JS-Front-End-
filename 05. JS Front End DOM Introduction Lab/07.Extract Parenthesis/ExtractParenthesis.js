function extract(content) {
    
    let para = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;
    let foundWords = []

    let match = pattern.exec(para);

    while(match){
        foundWords.push(match[1]);
        match = pattern.exec(para);
    }

    return foundWords.join("; ")

}
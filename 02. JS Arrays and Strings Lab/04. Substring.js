function substring (text, startIndex, elements){
    let substringedText = text.substring(startIndex, startIndex + elements);
    console.log(substringedText)
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);
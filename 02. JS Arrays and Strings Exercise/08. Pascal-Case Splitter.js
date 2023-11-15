function pascalSplitter (text) {

    let wordsRegex = /[A-Z][a-z]*/g;
    let wordsArray = text.match(wordsRegex);

    console.log(wordsArray.join(', '));


}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalSplitter('HoldTheDoor')
pascalSplitter('ThisIsSoAnnoyingToDo')
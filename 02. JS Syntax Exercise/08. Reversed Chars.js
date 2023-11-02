function toReverseText (char1, char2, char3){

    let resultArray = [char1 , char2 ,char3];
    let reverseResultArray = resultArray.reverse();
    let reverseResultString = reverseResultArray.join(" ");
    console.log(reverseResultString)

}

toReverseText('A','B','C')
toReverseText('1','L','&')
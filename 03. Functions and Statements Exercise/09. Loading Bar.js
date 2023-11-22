function loadingBar(number){


    if (number === 100){
        let percentCount = '%'.repeat(number/10);
        console.log(`100% Complete!`);
        console.log(`${number}% [${percentCount}]`);
    }else {
        let percentCount = '%'.repeat(number/10);
        let dotsCount = '.'.repeat(10 - percentCount.length);
        console.log(`${number}% [${percentCount}${dotsCount}]`);
        console.log(`Still loading...`);
    }


}
loadingBar(30);
loadingBar(50);
loadingBar(100);
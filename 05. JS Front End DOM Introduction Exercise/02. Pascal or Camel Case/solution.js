function solve() {
  let textToModify = document.getElementById('text').value.toLowerCase();

  let caseType = document.getElementById('naming-convention').value;

  let result = document.getElementById('result');

  
  if (caseType === "Camel Case") {
    let sentence = [];

    textToModify = textToModify.split(" ");

    sentence.push(textToModify[0]);

    for (let index = 1; index < textToModify.length; index++) {
      sentence.push(textToModify[index].charAt(0).toUpperCase() + textToModify[index].slice(1));
    }

    result.textContent = sentence.join('');

  } else if (caseType === "Pascal Case") {
    let sentence = [];

    textToModify = textToModify.split(" ");
    
    for (let index = 0; index < textToModify.length; index++) {
      sentence.push(textToModify[index].charAt(0).toUpperCase() + textToModify[index].slice(1));
    }
    result.textContent = sentence.join('');
  } else {
    result.textContent = "Error!";
  }

  
}
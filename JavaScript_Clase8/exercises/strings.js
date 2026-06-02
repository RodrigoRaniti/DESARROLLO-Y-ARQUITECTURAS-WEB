var phrase1 = "one of the best";
console.log(phrase1.toUpperCase());

var phrase2 = "Number of the beast";
console.log(phrase2.substring(0,5));

var phrase3 = "Back in time";
console.log(phrase3.substring(phrase3.length-3));

var phrase4 = "hELLO WORLD";
var fixedPhrase = phrase4.substring(0,1).toUpperCase() + phrase4.substring(1).toLowerCase();
console.log(fixedPhrase);

var phrase5 = "Hello world";
console.log(phrase5.indexOf(" "));

var phrase6 = "javascript programming";
var space = phrase6.indexOf(" ");
var firstWord = phrase6.substring(0,space);
var secondWord = phrase6.substring(space+1);
var finalPhrase = firstWord.substring(0,1).toUpperCase() + firstWord.substring(1).toLowerCase() + " " + secondWord.substring(0,1).toUpperCase() + secondWord.substring(1).toLowerCase();
console.log(finalPhrase);
var words=["casa","perro","auto","mesa","libro"];
for(var i=0;i<words.length;i++){alert(words[i]);}

for(var i=0;i<words.length;i++){
var modifiedWord=words[i].substring(0,1).toUpperCase()+words[i].substring(1).toLowerCase();
alert(modifiedWord);
}

var sentence="";
for(var i=0;i<words.length;i++){sentence+=words[i]+" ";}
alert(sentence);

var numbers=[];
for(var i=0;i<10;i++){numbers.push(i);}
console.log(numbers);
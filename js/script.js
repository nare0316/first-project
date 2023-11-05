var random=function(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
};


function myFunction(){
var words=document.getElementById("words").value;

var wordsArr=words.split(" ");
var filteredArr=wordsArr.filter(function(word){
    return word!=="";
});
var count=filteredArr.length;
var countText=(""+count).fontcolor("black");

var lettersArr=words.split("");
var filteredArr2=lettersArr.filter(function(letter){
    return letter!==" ";
});
var count2=filteredArr2.length;
var countText2=(""+count2).fontcolor("black");

var sentencesArr=words.split(".");
var filteredArr3=sentencesArr.filter(function(sentence){
    return sentence!=="";
});
var count3=filteredArr3.length;
var countText3=(""+count3).fontcolor("black");
var result="The number of words-"+countText+", the number of letters-"+countText2+", the number of sentences-"+countText3+".";

document.getElementById("res").innerHTML=result;
}



function backgroundColor(){
    document.body.style.backgroundColor ="rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
}
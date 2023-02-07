
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;


var imag = "images/dice"+randomNumber1+".png";

var imag2 = "images/dice"+randomNumber2+".png";
if(randomNumber1>randomNumber2){
    var paragraph2 = document.querySelectorAll("h1")[0].innerHTML="Player 1 wins! 👏";
}else if(randomNumber1<randomNumber2){
    var paragraph2 = document.querySelectorAll("h1")[0].innerHTML="Player 2 wins! 👏";
}else{
    var paragraph2 = document.querySelectorAll("h1")[0].innerHTML="Draw! 😀";
}

var paragraph = document.querySelectorAll("img")[0].setAttribute("src", imag);

var paragraph1 = document.querySelectorAll("img")[1].setAttribute("src", imag2);
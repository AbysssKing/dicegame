var rando1 = Math.floor(Math.random() * 6) + 1;
var ransrc1 ="dice"+rando1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ransrc1);
var rando2 = Math.floor(Math.random() * 6) + 1;
var ransrc2 ="dice"+rando2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ransrc2);
if(rando1>rando2){
    document.querySelector("h1").innerHTML="Player 1 wins🚩";
}
else if(rando2>rando1){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW ☺️";
}
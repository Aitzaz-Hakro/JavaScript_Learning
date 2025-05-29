var colorEL = document.querySelector(".body");
var redEL =document.querySelector(".red");
var yellowEL =document.querySelector(".yellow");
var orangeEL =document.querySelector(".orange");
var blueEL =document.querySelector(".blue");
var greenEL =document.querySelector(".green");

function changeColor(clicktype){
    document.body.style.backgroundColor=`${clicktype.innerHTML}`;
}


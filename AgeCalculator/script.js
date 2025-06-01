var birth= document.getElementById("birthdate");
var age= document.querySelector(".ageResult");
var btn= document.querySelector(".btn");

var currDate= new Date();


function CalculateAge(){
  var birthdate= new Date(birth.ariaValueNow);


  console.log(currDate.getFullYear());
  // console.log(age);
  
  console.log(birth.ariaValueNow);
  // console.log(birthdate);
  
}
  

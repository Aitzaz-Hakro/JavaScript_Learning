var birth= document.getElementById("birthdate");
var age= document.querySelector(".ageResult");
var btn= document.querySelector(".btn");

btn.addEventListener("click", CalculateAge);
var currDate= new Date().toDateString();
console.log(currDate);


function CalculateAge(){
  age.innerHTML=""; // 
  var dob= new Date(birth.value).toDateString();
  if(birth.value===""){
    age.innerHTML="Please enter your birthdate";
  }
  else if(new Date(birth.value)>= new Date()){
    age.innerHTML=`Incorrect Date of Birth`; 
  } 
  else{
      var result= new Date().getFullYear() - new Date(dob).getFullYear();
      age.innerHTML=`Your age is ${result} years`;
  }
  }  

  

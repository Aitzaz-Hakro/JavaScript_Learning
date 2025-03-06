// var name = "Aitzaz Hassan";

// console.log(name.split(" "));
// console.log(["AITZAZ", "HASSAN"].join(" "));


// Class 32 task random password generator



// this is the code for generating random password with 4 uppercase letters, 4 lowercase letters and 4 special characters


// var randomnum= "abdcdefghijklmnopqrstuvwxyz1234567890";
// var randomChar="!@#$%^&*()_+";

// var randompass="";

// for(var i=0;i<12;i++){
//    if(i<4){
//       randompass+=randomnum[Math.floor(Math.random()*26)].toUpperCase();
      
//    }
//    else if(i<8 && i>=4){
//       randompass+=randomnum[Math.floor(Math.random()*26)];
//    }
//    else{
//       randompass+=randomChar[Math.floor(Math.random()*randomChar.length)];
    
//    }

// };
// console.log(randompass);

// Date and time in javascript

var date= new Date();

// console.log(date);

// console.log("the number of day is",date.getDay());
// console.log("Full year ",date.getFullYear());
// console.log("Month ",date.getMonth());
// console.log("Time in Minutes",date.getMinutes());
// console.log("Time in Seconds",date.getTime());
// console.log("Time in Hours",date.getHours());

var anydate = new Date("2005-05-12");

var daynames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
console.log(daynames[anydate.getDay()]);

 var dob= prompt("Enter your Date of Birth(yyyy-mm-dd)");

   var dobdate= new Date(dob);
   var todaydate= new Date();
   var diff= todaydate.getTime()-dobdate.getTime();

   var diffyear= diff/(1000*60*60*24*12);

   console.log(diffyear);


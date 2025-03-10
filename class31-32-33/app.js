// ************* It Includes the following topics***************
// *************  1)Random Number Generator      ***************
// *************  2)Moment.js Library            ***************


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
// console.log(daynames[anydate.getDay()]);

//  var dob= prompt("Enter your Date of Birth(yyyy-mm-dd)");
var dob="2005-05-12";
   var dobdate= new Date(dob);
   var todaydate= new Date();
   var diff= todaydate.getTime()-dobdate.getTime();

  //  a day has 86400000 milliseconds
   var diffyear= (diff/(1000*60*60*24*365));

  //  console.log(diffyear);



// *********************moment.js library for date and time**********************8
  var date=moment().format("D dddd MMMMM hh:m A");
  // console.log(date);
  // console.log(date.format("MMM Do YYYY"));
  // console.log(date.format(""));

  var a = moment(new Date("2005-05-12 20:00"));
  var b= moment(new Date());

  // console.log(b.diff(a,"years"));
  // console.log(a.fromNow());

var date2= moment().format("h:mm:ss D/M/yyyy A ");
console.log(date2);

 
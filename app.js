console.log('Hello World!');
// alert("GIve Acess to Photos");

console.warn("This is a warning");
console.error("This is an error");

// variables in JavaSript
var number1 = 34;
var number2 = 56
// console.log(number1 + number2);

var fnum1= 30.5;
var fnum2 = 45.5;

var str1 = "This is a string 1";
var str2= 'this is a string 2';

// Objects in JavaScript
 var marks={
    hammad: 34,
    ali: 45,
    hamza: 67
 }
   //  console.log(marks);

    var bool1 = true;
    var bool2 = false;

   //  Array in Javasript
    var arr=[2,"aitzaz", 4,6,3,66,2];
   //  console.log(arr);
   // console.log(arr[1]);

   var und=undefined;
   var n="aitzaz";
   
   
   // ";" is optional in JavaSript   
   console.log(n)
   console.log(typeof n)

   var num1="4"-"2"+"4";
   // output is 24
   console.log(num1);
    
   document.write("<h1>"+ arr[1]+ "</h1>")

   // prompt is used to take input from user
   // var Name=prompt("Enter your name");
   // console.log(Name);
   var gender= prompt("Enter your Gender: "); 
   if(gender=="Male" ||gender=="male"){
      console.log("Welcome Sir");
      document.write("<h1>Hello Sir </h1>");
   }
   else if(gender=="female"||gender=="Female"){
      console.log("Welcome Mam");
   }
   Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });


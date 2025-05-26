// var arr= [3,5];
// function myPush(value) {
//      arr[arr.length] =value;
//     //  console.log(arr);

//     }

//     myPush(5);
//     myPush(3);
//     myPush(7);

//     function myPop() {
//         for(var i=0; i<arr.lenth; i++){
//             if(i === arr.length - 1){
//                 arr.pop();
//                 break;
//             }
//         }
//         // console.log(arr);
//     }

//  console.log("Before Pop: ", arr);
//  myPop();
//  console.log("After Pop: ", arr);

// function PrintName(name) {
//   return name;
// }

// console.log(PrintName( prompt("Enter your name")));

// function CalculateAge(birthyear, name) {
//    var age = 2025 - birthyear;
//   if (age) {
//     var agemsg = "hello " + name + " you are " + age + " years old";
//     return agemsg;
//   }
// }

// var namee = prompt("Enter your name");
// var birthyear = prompt("Enter your birth year");
// alert(CalculateAge(birthyear, namee));

// Methods to write a funciton 
// 1. Function Declaration
  // function myFunction() {}
// 2. Function Expression
  // var myFUnction = function(){}
// 3. Arrow Function
//  var myFUnction = (/* Parameters*/)=> {}


//  we can set default values to the function parameters
//  function name4(name = "Name not provided", age = 23) {
//   console.log("Name: " + name,"Age: " + age);}

// name4();

                    // another mehthod to set default values to the function parameters
// function showName(name){


//  if(name=== undefined){
//     alert("Name not provided");
//  }  
//  else{

//    alert("Name: " + name);
//  }

// also a method to set default
// alert(name + " is your name?"?? "Name not provided");
// }
// showName("john");

// function accesscheck(age){
//  if(age >= 18){
//    return true;
//  }
//  else{
//    return confirm(" are you sure you want to continue?");
//  }

// }
// var age = prompt("Enter your age", 18);
//  if(accesscheck(age)){
//    alert("Access granted");
//  }
//  else{
//    alert("Access denied");
//  }
 
// var primess = [];
// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//     // primess.push(i);
//     primess[i] = i;
//     // alert( i ); // a prime
//   }

// }

// // alert (primes);
// console.log(primess);

// showPrimes(49);


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);








  // let age = prompt("Whats is your age",18);

  // let welcome = (age >= 18) ? () => alert("Greetings Sir!") : () => alert("Hello Boy!"); 

  // welcome();



  // Ternary operator
//   let age = prompt('age?', 18);
// let message = (age <= 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );



// let compname= prompt("which company owns GitHub?","");
// (compname=="GOOGLE") ?
//  alert("you are hired") : alert("you are not hired"); 



// let name="Aitzaz";
// console.log(`hello, ${name}!`);
 
// spread operator
//  const arr1 = [1, 2];
//  const arr2 = [0,...arr1, 3];
//  console.log(arr2); // [1, 2, 3, 4]



// Arrow Function
// let add= (a,b) => a+b;
// console.log(add(2.4,3));  

// let say = ()=> console.log("Hello World");
// say();



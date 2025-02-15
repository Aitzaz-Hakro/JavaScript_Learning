
var num1=3;
var num2="3";

// console.log(num1==num2);//this checks the value only
// console.log(num1===num2); //this checks the value and datatype both

var string1="This is a string";

Boolean(string1); //true  (other mehtod is !!string1)

// All strings have true value except 6 below.

Boolean(""); //false
Boolean(0); //false
Boolean(undefined); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(false); //false

var Array2=["abc", "def","hello","Aitzaz"];
console.log(Array2)
Array2.shift() //removes the first element of the array
// console.log(Array2)
Array2.unshift("abc") //adds the element at the start of the array
// console.log(Array2)

// Splice Method : Can remove element from any position and can add element at any position
Array2.splice(0,2,"hello"); //removes the first element of the array
console.log(Array2)
var copyarray= Array2.splice(0,3) // it gives the whole array
console.log(copyarray)




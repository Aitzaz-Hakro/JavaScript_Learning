
// var Array4=[23,34,"Hammad", "aitzaz"]

// Array4.splice(0,3) // it deletes array from index 0 to 2 
// Array4.splice(0,2,"hello","world")
// console.log(Array4);

// var Array5=["ALi","Hammad","raza"]

// var copyarray= Array5.slice(0,3) //copy the whole array5
// console.log(Array5)
// console.log(copyarray)


var Cities=["Hyderabad","Karachi","Multan","Lahore","Islamabad"];
console.log("Cities before==>",Cities);

var CitiesAdd=Cities.splice(5,3,"Faisalabad","Quetta") ;
// it will add cities at index 5 because index 5 is not present in array 
// if the index is available then splice will replace the value of that index with the given value

console.log("Cities After==>",Cities);


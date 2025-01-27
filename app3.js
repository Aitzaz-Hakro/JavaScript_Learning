
// var Array4=[23,34,"Hammad", "aitzaz"]

// Array4.splice(0,3) // it deletes array from index 0 to 2 
// Array4.splice(0,2,"hello","world")
// console.log(Array4);

// var Array5=["ALi","Hammad","raza"]

// var copyarray= Array5.slice(0,3) //copy the whole array5
// console.log(Array5)
// console.log(copyarray)




// ******************  SPLICE AND SLICE METHODS  ******************

var Cities=["Hyderabad","Karachi","Multan","Lahore","Islamabad"];
console.log("Cities before==>",Cities);

var CitiesAdd=Cities.splice(8,2,"Faisalabad","Quetta") ;

// it will add cities at index 5 because index 5 is not present in array 
// if the index is available then splice will replace the value of that index with the given value



// var CitiesCopy=Cities.slice(1,2,"Faisalabad","Quetta") ;

console.log("Cities Added==>",CitiesAdd);

// console.log("Cities Copy==>",CitiesCopy); 


console.log("Cities After==>",Cities);  //After Addition



// Slice is used to copy the array
// Splice is used to add or remove the elements from the array

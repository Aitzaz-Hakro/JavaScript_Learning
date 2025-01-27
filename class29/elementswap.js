
var array=["aitzaz ","zain", "Civic"];

console.log(array);
console.log("array before==>",array);

var temp=array[0];
array[0]=array[2];
array[2]=temp;

console.log("array after==>",array);
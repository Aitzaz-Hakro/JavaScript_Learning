
// var array=["aitzaz ","zain", "Civic"];

// console.log(array);
// console.log("array before==>",array);

// var temp=array[0];
// array[0]=array[2];
// array[2]=temp;

// console.log("array after==>",array);

// Task is to swap without using 3rd variable
 
 var array=["aitzaz ","zain", "Civic"]; 
    console.log("array before==>",array);

    array[0]=array[0]+array[2];
    array[2]=array[0].substring(0,array[0].length-array[2].length);
    array[0]=array[0].substring(array[2].length);
    console.log("array after==>",array);
    
    
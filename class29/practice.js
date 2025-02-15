 var objectss ={
    prop1: 10,
    prop2: 20,
    prop3: 2,
 }
 var nestedobjects = {
  layer1:{
    layer2: {
        layer3: {
            prop1: 10,
            prop2: 20,
            prop3: 2,
        }
    }
  } 
}

//  console.log(objectss);
//  console.log(nestedobjects);

// method to find any value inside a string

var text= "hello my name is aitzaz hassan hakro";

for(var i=0; i<text.length;i++){

  // console.log(text.slice(i,i+5)==="hakro");
}

// var user= prompt("enter a word to find in string");


// console.log(text.indexOf(user));

// if we want to find a specific word in a string
// -1 shows the word is not available in the string



// similar to indexof is lastindexof which will find the last occurance of the word

// if(text.indexOf(user)!==-1){

//   console.log("yes found");
// }
// else{
//   console.log("not found");
// }

// var replace=prompt("enter a word to replace to replace ",user ," with");

// console.log("replaced successfully, now the string is:",text.replace(user,replace));

// To find a character we use:
//  "aitzaz".charAt(3); 
 console.log("aitzaz".charAt(3));
 console.log("aitzaz"[3]);

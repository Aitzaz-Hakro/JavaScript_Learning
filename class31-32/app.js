// var name = "Aitzaz Hassan";

// console.log(name.split(" "));
// console.log(["AITZAZ", "HASSAN"].join(" "));


// Class 32 task random password generator

var randomnum= "aHAFsfs43GL@#$(#)sfdfWEQP16289";

var randompass="";
for(var i=0;i<10;i++){
   randompass+=randomnum[Math.floor(Math.random()*randomnum.length)];

}
console.log(randompass);

// Objects in JavaScript

// const obb = {
//     hello: `hello`,
//     name: `Aitzaz Hassan`
// }

// obb.hello = `hello ${obb.name}`;

// console.log(obb.hello); // Output: hello Aitzaz Hassan


//  function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }

// let user=makeUser("Aitzaz",23);
// alert(user.age + " "+user.name); 

// For in Loop in Objects 

// let ClientsObj={
//     name: "Aitzaz Hassan",
//     age : 20,
//     workedfor: "webdev"
// }

// for(let key in ClientsObj){
//   console.log(`${key}: ${ClientsObj[key]}`);
//  }





             // This keyword in Objects
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


// Objects in JavaScript

// const obb = {
//     hello: `hello`,
//     name: `Aitzaz Hassan`
// }

// obb.hello = `hello ${obb.name}`;

// console.log(obb.hello); // Output: hello Aitzaz Hassan


 function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

let user=makeUser("Aitzaz",23);
alert(user.age + " "+user.name); 




// ~~~~~~~~~~~~~~~~~~~~~~~~Objects in JavaScript

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





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ This keyword in Objects ~~~~~~~~~~~~~~~~~~~~~~~~~
// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Destructuring Arrays and Objects ~~~~~~~~~~~~~~~~~~~

//  let arr =["Raza","Khan"];
//  let [firstName, LastName]= arr;
//  console.log(firstName);
 

// ~~~~~~~~~~~~~ Object Destructuring

// let shop = {
//   name: "milkshop",
//   locationn: "hyd",
//   code: 233
// }

// let {name,locationn,code}=shop;

// console.log(`the name of shop is ${name} and it is located in ${locationn} and the code is ${code}`); 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Destructuring in Functions Parameters

// let shop={
//   title: "menu",
//   item: ["item1","item2"],
//   code: 123
// }

// function showDetails({title,item=[],code}){

//   alert(`${item} ${title} ${code}`);
// }
// showDetails(shop);

// ~~~~~~~~~~~~~~~~~~~~~~~ Optional Chaining in Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~

let user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: ()=> "New York",
  }
  
}
alert(user?.address?.street); // Output: 123 Main St
alert(user?.address?.city?.()); // Output: 123 Main St


delete user?.name; // deletes the name property if user exists

// it works as : if user is not null or undefined then it will access the 
// address property and then street property otherwise it will return undefined.




// ************** 1. Function Declaration **************

// function hell0() {
//     console.log('Hello World!');
//     alert("hello world");
// }
// hell0();


// function nameShow(name) {
//     console.log('Hello ' + name +"!");
//     // document.write('Hello ' + name +"!");
// }
// var entername = prompt('Enter your name');
// nameShow(entername);



function submitForm(){

  var name = document.getElementById('name');
  var email= document.getElementById('email');
 if(name.value === '' || email.value === ''){
   alert('Please fill the form properly');
   return;
 }
 else{
  console.log('Name: ' + name.value + '\n' + 'Email: ' + email.value);
  document.getElementById('result').innerHTML = 'Name: ' + name.value + '<br>' + 'Email: ' + email.value;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  
}
}
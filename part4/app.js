

// objects
// allows you to store a collection of data but allow you to store data with label.
// const person = {
//   firstName: `qaisar`,
//   lastName: `ali`,
//   location: [`planet`, `earth`],
//   isProgrammer: true,
//   10: `ten`,
// };

// accessing items from an array
// console.log(person.lastName);
// console.log(person.firstName);
// console.log(person.location);
// console.log(person[`location`]);
// console.log(person[10]);
// add element to an object
// const person = {
//   work: `welder`,
// };
// person.loaction = `multan`;
// person.time = `10oclock`;
// console.log(person);
// how delete element
// delete person.work;
// console.log(person);

// function
// a function is a block of code that perform specific task
// function make the code reusable you can declare it once and use it multiple times
// function makes the task easier as each small task is divided into function
// function increase readability
// DRY--dont repeat yourself
// function name parameter(ifany)

// function qaisar() {
//   console.log(`hellow everyone`);
// }
// qaisar();
// function sayHelo(name) {
//   console.log(`hy mr ${name}`);
// }
// sayHelo(`qaisar`);

// return keyword

// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 7));

// function expression and function decalaration

// function declaration

// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 7));
// if we place clg at top all function will work correctly

// function expression

// const greeting = function (user) {
//   console.log(`hellow ${user}`);
// };
// greeting(`qaisar`);
// in this case the function will not work correctly

// function callBack

// when we provide function as an argument to another function that function is known as callback function

// function showCallBack(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallBack(function (value) {
//   console.log(value);
// })
// function qaisar(name, fb) {
//   console.log(`my name is ${name}`);
//   fb();
// }

// qaisar(`qaisar`, function fb() {
//   console.log(`how are you`);
// });

// scope in js refers to the current context of code. which determine the accessibility of variables to javascript
// there are two types of scopes in js
// global variables are those declared outside of a block
// let x = 10; //global variable
// console.log(x);
// local variables are those declared inside of a block
// {
//   let x = 10;
// }
// console.log(x);
// function showMessage() {
//   let text = `hellow everyone`;
//   console.log(text); //local variable
// }
// showMessage();
// const person = {
//   name: "Qaisar",
//   age: 21,
//   greet: function () {
//     return `hellow my name is ${this.name} and i am ${this.age} year old`;
//   },
// };

// const { Children } = require("react");

// const rest = person.greet();
// console.log(rest);

// const person = {
//   name: "Qaisar",
//   age: 21,
//   greet: () => {
//     return `hellow my name is ${this.name} and i am ${this.age} year old`;
//   },
// };

// const rest = person.greet();

// console.log(rest);

// function get(name, age, pl) {
//   return {
//     name,
//     age,
//     pl,
//   };
// }
// const qaisar = get("qaisar", 13, "python");
// console.log(qaisar);

//

// function CreatePeople(name, age, pl) {
//   this.name = name;
//   this.age = age;
//   this.pl = pl;
// }

// const qaisar = new CreatePeople("Qaisar", 21, "javascript");

// console.log(qaisar);

// function Book(name, title, year) {
//   this.name = name;
//   this.title = title;
//   this.year = year;
//   this.info = function () {
//     console.log(
//       `the book name is ${this.name} and the title of book is ${this.title} and publish year is ${this.year}`
//     );
//   };
// }

// const book1 = new Book("the subtle art of not giving a fuck", "Mark", 2022);
// const book2 = new Book("atomic habit", "james clear", 2025);

// const bookRest = book1.info();
// console.log(bookRest);

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;

//   this.info = function () {
//     console.log(
//       `hellow my name is ${this.name} and i am ${this.age} year old and my gender is ${this.gender}`
//     );
//   };
// }

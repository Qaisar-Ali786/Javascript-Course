// function Animal(name) {
//   this.name;
// }
// Animal.prototype.sound = function () {
//   return `animal sound`;
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.name = name;
//   this.breed = breed;
// }
// Dog.prototype = Object.create(Animal.prototype);
// dog1 = new Dog("dog", "good");
// console.log(dog1.name);
// console.log(dog1.sound());
// console.log(dog1);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.info = function () {
//       return `name: ${this.name} ${this.lastName}; age: ${this.age}`;
//     };
//   }
//   greet() {
//     return `hellow my name is qaisar`;
//   }
// }
// const qaisar = new Person("qaisar", "ali", 18);
// console.log(qaisar.__proto__);

// class Programmer extends Person {
//   constructor(firstName, lastName, age, pl, experience) {
//     super(firstName, lastName, age);
//     this.pl = pl;
//     this.experience = experience;
//   }
// }
// const huxn = new Programmer("huxn", "webdev", 19, "javascript", 12);
// console.log(huxn);

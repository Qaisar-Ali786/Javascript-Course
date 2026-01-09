// function Count() {
//   let _count = 0;

//   this.increment = function () {
//     _count++;
//   };
//   this.decrement = function () {
//     _count--;
//   };
//   this.getCount = function () {
//     return _count;
//   };
// }
// const counter = new Count();
// console.log(counter._count);

// let sum = 10;
// function Sum() {}
// const sumer = new Sum();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   sound() {
//     throw new Error("Method(makeSound) must be implemented");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   sound() {
//     return `wog`;
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   sound() {
//     return "meon";
//   }
// }
// const animal = new Animal("jk");
// console.log(animal.name);

// const dog = new Dog("woow");
// console.log(dog.sound());
// const cat = new Cat("meon");
// console.log(cat.sound());
// console.log(dog.sound());
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.sound = function () {
//   return `cow`;
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// // Dog.prototype.sound = function () {
// //   return `cat`;
// // };

// const animal = new Animal();
// console.log(animal.sound());
// const dog = new Dog();
// console.log(dog.sound());

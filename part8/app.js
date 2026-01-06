// const person1 = new Person("Qaisar", 21, "male");
// console.log(person1.info());
// const person2 = new Person("Ali", 21, "male");

// console.log(person2.info());

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.start = function () {
//     console.log(
//       `starting the totota company where the toyota is ths make of ${
//         this.make
//       } and model is ${this.model} and the launched year is ${
//         this.year
//       } and the color of the car is ${(this, color)}`
//     );
//   };
//   this.stop = function () {
//     console.log(
//       `stopping the honda where honda is the make of ${
//         this.make
//       } and the model is ${this.model} and year is ${this.year} and color is ${
//         (this, color)
//       }`
//     );
//   };
// }

// const car1 = new Car("honda", 2021, 2025, "red");

// console.log(car1.start());
// const car2 = new Car("city", 2005, 2022, "green");

// console.log(car2.stop());

// const person = {
//   greet: function () {
//     console.log(
//       `hellow my name is ${this.name} and last name is ${this.lastName}`
//     );
//   },
// };

// const qaisar = Object.create(person);
// qaisar.name = "Qaisar";
// qaisar.lastName = "ali";
// qaisar.greet();

// const ali = Object.create(person, {
//   name: { value: "Qaisar" },
//   lastName: { value: "ali" },
// });
// ali.greet();

// Array.prototype.pop = function () {
//   return `hy baby`;
// };
// const myArr = ["one", "two", "three"];
// console.log(myArr);

// String.prototype.helo = function () {
//   console.log(this.toUpperCase());
// };

// console.log(`hy my name is qaisar .`.helo());

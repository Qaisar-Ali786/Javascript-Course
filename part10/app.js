// class Hero {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//     this.greet = function () {
//       return `hy everyone how are you all`;
//     };
//   }
//   greet() {
//     return `hy how are you`;
//   }
// }

// class Mega extends Hero {
//   constructor(name, level, spell) {
//     super(name, level);
//     this.spell;
//   }
// }
// const qaisar = new Mega("qaisar", "acha", 6);
// console.log(qaisar);

// function MyClass(publicField, privateField, protectedField) {
//   this.publicField = publicField;

//   const _privateField = privateField;

//   const _protectedField = protectedField;

//   this.publicMethod = function () {
//     return `Public Field: ${this.publicField}`;
//   };

//   function _privateMethod() {
//     return `privateMethod: ${privateField}`;
//   }

//   function _protectMethod() {
//     return `protectedMethod: ${protectedField}`;
//   }

//   this.accessPrivateMethod = function () {
//     return _privateMethod();
//   };
// }

// const myobj = new MyClass("public data", "private date", "protected data");
// // console.log(myobj.publicField);
// // console.log(myobj.privateField);
// // console.log(myobj.privateField);

// console.log(myobj.publicMethod());
// console.log(myobj._privateMethod());
// console.log(myobj._protectMethod());

// console.log(myobj.accessPrivateMethod());

// Assigning types to variables
// const a = 2;
// let b: number = 4
// let c = 5
// let str: string = 'Hello'
// const n = null
// const u = undefined

// Array
// const a: number[] = [1, 2, 3] // array of numbers
// a.push(4)
// or
// let a: number[] = []
// a = [1, 2, 3]

// Date
// const today: Date = new Date()

// Any Type // Never use any bad code for TypeScript
// let a // let a: any = 4
// a = 3
// a = "Hello"
// const a = fetch('sdfds').then(res => res.json()).then(data => {
//   data
// })

// Object
// const person: { name: string; age: number; isProgrammer?: boolean } = {
//   name: "Kyle",
//   age: 28,
// };
// person.isProgrammer = true;

// Object Types - same as interface but can be used for classes as well
// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[];
//   address: {
//     street: string;
//   }
// };

// const person: Person = {
//   name: "Kyle",
//   age: 28,
//   friends: ["Sara", "John"],
//   address: {
//     street: 'Main'
//   }
// };

// const person2: Person = {
//   name: "Sara",
//   age: 25,
//   friends: [],
//   address: {
//     street: 'Main'
//   }
// };

// Object Interfaces - same as type but can be used for classes as well
// - Can't be used for non-object types
type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  }
};

const person: Person = {
  name: "Kyle",
  age: 28,
  friends: ["Sara", "John"],
  address: {
    street: 'Main'
  }
};

const person2: Person = {
  name: "Sara",
  age: 25,
  friends: [],
  address: {
    street: 'Main'
  }
};
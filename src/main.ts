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
// const today: Date = new Date() //- End Assigning types to variables

// Any Type // Never use any bad code for TypeScript
// let a // let a: any = 4
// a = 3
// a = "Hello"
// const a = fetch('sdfds').then(res => res.json()).then(data => {
//   data
// }) //- End Any Type

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
// }; //- End Object Types

// Object Interfaces - same as type but can be used for classes as well
// - Can't be used for non-object types
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
// }; //- End Object Interfaces

// Defining Functions
// function printName(name: string, name2: string) {
//   console.log(name, name2);
// }
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const c = sum(1, 2); // c is a number thanks typescript
// function printPerson(person: { name: string }) {
//   console.log(person.name);
// }
// const person = { name: "Kyle", age: 28 };
// printPerson(person); //- End Defining Functions

// Optional Parameters
// function printNameAndAge(name: string, options?: { debugMode: boolean}) {
//   console.log(name, options?.debugMode);
// }
// // printNameAndAge("Kyle", { debugMode: true});
// printNameAndAge("Kyle"); //- End Optional Parameters

// Destrcuturing
// type Option = {
//   debugMode?: boolean
//   indentLevel?: number
// };
// function printNameAndAge(
//   name: string,
//   { debugMode = false, indentLevel}: Option = {}
// ) {
//   console.log(name, debugMode, indentLevel);
// }
// printNameAndAge("Kyle"); //- End Defrcuturing

// Rest Parameters
// function sum(...nums: number[]) {
//   return nums;
// }
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 2)); //- End Defining Functions

// Typing variables as Functions
// function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
//   cb(a + b);
// }
// sumWithCallback(1, 2, (result) => {
//   console.log(result);
// });
// type PrintNameFunc = (name: string) => number
// function f(name: string) {
//   return 2
// } //- End Typing variables as Functions

// Unions Types
// let id: string | number | boolean = 7
// id = '7'
// id = true

// type Person = {
//   id: number | string
//   isProgrammer: boolean | undefined
//   status: string
// }

// type Todo = {
//   name: string
//   status: "Complete" | "Incomplete" | "Draft"
// }

// // type TodoPerson = Todo | Person
// type TodoPerson =
//   | Todo
//   | {
//     name: string
//     age: number
//   }

// const todo: Todo = {
//   name: "Laundy",
//   status: "Complete",
// } //- End Unions Types

// Intersection Types

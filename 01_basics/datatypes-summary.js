// PRIMITIVE DATA TYPES
// 7 types : String, Number, BigInt, Boolean, undefined, null, Symbol

// JavaScript is a dynamically typed language
// In JavaScript, you don't need to declare a variable's data type explicitly. The type is determined
// automatically based on the value assigned to the variable. This is known as dynamic typing.
let x = 10;       // Number
x = "Hello";      // String
x = true;         // Boolean

console.log(x);   // true
// Here, x changes from a number to a string and then to a boolean without any error.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null 
let userEmail; //undefined => variable is declared but not initialized

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false => because every symbol is unique

// const bigNumber = 23543644546465448469n



// REFERENCE DATA TYPES OR NON PRIMITIVE DATA TYPES

// Array, Objects, Functions

const heros = ["Iron Man" , "Spiderman", "Thor", "Hulk"]
let myObj ={
    name: "Adarsh Raj" ,
    age: 18 ,
}

const myFunction =  function() {
    console.log("Hello World")
}

console.log(typeof bigNumber) //bigint but it will undefined because it is commented out
console.log(typeof outsideTemp) //null is an object in JavaScript
console.log(typeof scoreValue) //number
console.log(typeof myFunction) //function
console.log(typeof heros) //object
console.log(typeof symbol) //symbol

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)=> Value , Heap(Non-Primitive)=> original value reference

let myYoutubename = "Adarshraj.com"

let anothername = myYoutubename 
anothername = "chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Adarsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
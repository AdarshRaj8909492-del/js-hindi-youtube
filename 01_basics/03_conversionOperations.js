let score = "98abcd"
let adher = null
console.log(adher) //null
console.log(typeof score) //string
console.log(typeof(score)) //string

let valueInNumber = Number(score) //explicit conversion
console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) //NaN => Not a Number => a special number which indicates that the value is not a valid number
let valueInNumber1 = Number(adher) //explicit conversion
console.log(typeof(valueInNumber1)) //number
console.log(valueInNumber1) //0 => null is converted to 0


//"33" => 33
//"33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = "Adarsh"

let booleanIsLoggedIn = Boolean(isLoggedIn) //explicit conversion
console.log(booleanIsLoggedIn) //true

// 1 => true; 0=> false
// "" => false
// "Adarsh" => true
// null => false


let someNumber = 33
let stringNumber = String(someNumber) //explicit conversion
console.log(stringNumber) //33
console.log(typeof stringNumber) //string
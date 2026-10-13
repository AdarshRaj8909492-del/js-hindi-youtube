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

//*************************** Operations **************** */

let Value = 3
let negValue = -Value //unary operator
console.log(negValue) //-3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2) //modulus operator => gives remainder
// console.log(2**3) //exponential operator => 2^3 => 2*2*2 => 8

let str1 = "Adarsh"
let str2 = " Raj"

let str3 = str1 + str2 //concatenation operator
console.log(str3) //Adarsh Raj

// console.log("1" + 2) //12 => 1 is converted to string and then concatenated with 2
// console.log(1 + "2") //12 => 2 is converted to string and then concatenated with 1

// console.log("1" + 2 + 3) //123 => 1 is converted to string and then concatenated with 2 and then concatenated with 3
// console.log(1 + 2 + "3") //33 => 1 and 2 are added first and then concatenated with 3

// console.log((3+4) * 5 % 3); 

console.log(+true);

// console.log(true+) it will give error because + is a binary operator and it needs two operands but here we have only one operand which is true. So, it will give error.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
gameCounter++;  // ++gamecounter also give the same result but the difference is that ++gameCounter will increment the value of gameCounter before using it in the expression and gameCounter++ will increment the value of gameCounter after using it in the expression.
console.log(gameCounter); //101 => increment operator => adds 1 to the value of gameCounter

let x = 10;
let y = x++ + 5;

console.log(y);
console.log(x);
//x++ contributes the old value 10, so y = 10 + 5 = 15. Then x becomes 11.




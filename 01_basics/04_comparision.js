// console.log(2 > 1); //true
// console.log(2 >= 1); //true

// console.log("2" > 1); //true => "2" is converted to number and then compared with 1
// console.log("02" > 1); //true => "02" is converted to number and then compared with 1

console.log(null > 0); //false => null is converted to 0 and then compared with 0
console.log(null >= 0); //true => null is converted to 0 and then compared with 0
console.log(null == 0); //false => null is not equal to 0   
// the reason is that an equality operator (==) does not convert null to 0, but comparison works differently it
// converts null to 0 and then compares it with 0

console.log(undefined == 0); //false => undefined is not equal to 0
console.log(undefined > 0); //false => undefined is not greater than 0
console.log(undefined < 0); //false => undefined is not less than 0

// === 

console.log("2" === 2); //false => "2" is string and 2 is number => different types => false

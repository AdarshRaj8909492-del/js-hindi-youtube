const accountId = 144553
let accountEmail = "adarshraj8909492@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState; 

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "34345432"
accountCity = "Pune"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail , accountPassword, accountCity, accountState])
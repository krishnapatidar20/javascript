const accountId = 123
let accountEmail = "k@gmail.com"
var accountPassword = "678"
accountCity = "Indore"
let accountState;

 // accountId = 98 // not allowed 

accountEmail = "p@mail.com"
accountPassword = "345647"
accountCity = "bhopal"

console.log(accountId);

/*
Prefer not to use var because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])

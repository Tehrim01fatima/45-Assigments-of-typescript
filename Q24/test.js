// variables
var apple = "apple";
var upppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var conteries = ["pakistan", "turkyie", "Spain", "Saudia Arabia", "oman", "Qatar", "Morroco", "Algeria"];
//test of equality and inequality
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple");
console.log(apple != "apple");
// test using loweer case function
console.log("Is APPLE is equal to apple after converting to lower case? ");
console.log(upppercaseApple.toLowerCase() == "apple");
console.log("\n IS apple is not equal to apple after converting to lowercase?");
console.log(upppercaseApple.toLowerCase() != "apple");
// numerical tests
// isequal to 
console.log("is ten is equal to 20");
console.log(ten == twenty);
// is not euqal to
console.log("\n  Is ten is not equal to twenty?");
console.log(ten != twenty);
// greater than 
console.log("\n Is ten is grater than zero?");
console.log(ten > 0);
//not less than
console.log("/n Is twenty is  less than 0?");
console.log(twenty < 0);
//greater than or equal to 
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\n Is twenty is less than or equal to 10?");
console.log(twenty <= 10);
//test using  "and " and "or"operators
console.log("\n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greator than 30");
console.log(twenty != 10 && twenty > 30);
console.log("\n twenty is grater than 50 || tewnty is equal to 20");
console.log(twenty > 50 || 20 == 20);
console.log("\n twenty is grater than 50 || tewnty is not equal to 20");
console.log(twenty > 50 || 20 != 20);
//test by using whetther include in array or not 
console.log("\n Is spain include in an array?");
console.log(conteries.includes("Spain"));
console.log("\n Is pakistan  not include in an array?");
console.log(!conteries.includes("pakistan"));

//Define Variables
let apple = "apple";
let uppercaseApple = "APPLE"
let ten =10;
let twenty =20;
let fruits = ["apple" ,  "mango" , "orange" , "banana"];

//Test for Equility and UnEquiliy with Strings
console.log("Is appple  is equal to apple?");
console.log(apple == "apple");

console.log("\nIs appple  is not equal to apple?");
console.log(apple != "apple");

//Test Using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()== "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!= "apple");

//Numerical Tests
//Equals to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is greater than ten?");
console.log(twenty < 10);

//Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

//Test using "and" & "or" operators
//Using &&(and)
console.log("\n twenty is not equals to ten and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equals to ten and twenty is greater than thirty");
console.log(twenty != 10 && twenty > 30);

//Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in  array
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("orange"));

//Not Include
console.log("\nIs orange  not include in my fruits array");
console.log(!fruits.includes("orange"));

























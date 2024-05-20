//Making an Array Of Countries and Print its Original Order
let countriesTovisit: string[] = ["Turkey" , "China" , "Maldives" , "Pakistan" , "Brazil"];
console.log("Original Order:" ,countriesTovisit);

//Print the Array in Alphabetical order Without Modifying the Actual Or Original Array list
console.log("Alphabetical Order:", [...countriesTovisit].sort());

//Sure that rray is still in its original Order
console.log("Still in Original Order:" , countriesTovisit);


//Print the Array in Reverse Alphabetical order without changing the original Array list
console.log("Reverse Order:" ,[...countriesTovisit].reverse());

//Sure that rray is still in its original Order
console.log("Still in Original Order:" , countriesTovisit);

//We have changes the original Array Order Now
console.log("Original Array Reversed:" , countriesTovisit.reverse());

//Printing the Array to show that it's back to its Original Order 
console.log("Back to Original Order:" , countriesTovisit.reverse());

//Print the Array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:" , countriesTovisit.sort()); 

//We have changed Again the Original Array Order Now in Reverse order again
console.log("Original Array Reversed Again:" , countriesTovisit.reverse());















var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an Array Of Countries and Print its Original Order
var countriesTovisit = ["Turkey", "China", "Maldives", "Pakistan", "Brazil"];
console.log("Original Order:", countriesTovisit);
//Print the Array in Alphabetical order Without Modifying the Actual Or Original Array list
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
//Sure that rray is still in its original Order
console.log("Still in Original Order:", countriesTovisit);
//Print the Array in Reverse Alphabetical order without changing the original Array list
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
//Sure that rray is still in its original Order
console.log("Still in Original Order:", countriesTovisit);
//We have changes the original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());
//Printing the Array to show that it's back to its Original Order 
console.log("Back to Original Order:", countriesTovisit.reverse());
//Print the Array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
//We have changed Again the Original Array Order Now in Reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());

//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians greater through.map it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return ("The Great ".concat(name)); });
}
//Define an Array Of Magician Names
var magician_names = ["Harry Poter", "Arham", "Shahzain"];
//Making a Copy of Original Array through .Slice() Function
var copy_magician_names = magician_names.slice();
//Modify the Copy array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
//Show Both Arrays Original And Copied
//Original
console.log("Original Array\n");
show_magicians(magician_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

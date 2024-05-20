//Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Function to make magicians greater through.map it will modify Array
function make_great(magicians: string[]){
     return magicians.map(name => (`The Great ${name}`))
}

//Define an Array Of Magician Names
let magician_names = ["Harry Poter" , "Arham" , "Shahzain"];

//Making a Copy of Original Array through .Slice() Function

let copy_magician_names = magician_names.slice()

//Modify the Copy array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names); 

//Show Both Arrays Original And Copied

//Original
console.log("Original Array\n")
show_magicians(magician_names);

//Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);

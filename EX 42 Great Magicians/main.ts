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

//Calling make_great function to modify magicians names
let great_magicians = make_great(magician_names);

//Calling show_magicians function that show modified list of magicians
show_magicians(great_magicians)





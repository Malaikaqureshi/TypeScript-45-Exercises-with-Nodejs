//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return ("The Great ".concat(name)); });
}
//Define an Array Of Magician Names
var magician_names = ["Harry Poter", "Arham", "Shahzain"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);

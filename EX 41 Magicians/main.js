// Define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Define an array containing magician name
var magician_name = ["Harry Poter", "Arham", "Shahzain"];
//Call the function to print each magician name
show_magicians(magician_name);

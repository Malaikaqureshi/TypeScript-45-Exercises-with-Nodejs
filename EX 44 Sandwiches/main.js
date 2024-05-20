//Define a function with a Rest Parameter that accepts items arguments reresenting our Sandwich
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the folllowing items: \n");
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow Enjoy Sandwich");
}
//Call the Function 3 times with 3 Different number of arguments
make_Sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_Sandwich("Bread", "Butter");
make_Sandwich("Bread", "Butter", "Mayo", "Cheese", "Chicken", "Tomato", "Egg");

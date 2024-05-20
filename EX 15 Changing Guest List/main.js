var guestList = ["Iqra", "Noor", "Areeba", "fatika"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi Aa skti");
//splice 
guestList.splice(0, 1, "Rida");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would You like to Dinner with Me")); });

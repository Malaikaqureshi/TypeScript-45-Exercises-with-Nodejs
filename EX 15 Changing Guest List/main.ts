let guestList  = ["Iqra" , "Noor" , "Areeba" , "fatika"];

let dontCome = guestList[0];

console.log(dontCome, "Nhi Aa skti");

//splice 
guestList.splice(0 , 1, "Rida"); 

guestList.forEach(guest => console.log(`Salam ${guest}, Would You like to Dinner with Me`));
//Creating s Guestlist Array
let guestList = ["Iqra" , "Noor" , "Areeba" , "Fatika"];

//Making a Variable For those Guests who cant Come
let dontCome = guestList[0];

//Print the name of guest who cant come
console.group(dontCome , "Nh Aa Sakti hain");


//Add or Remove guest From GuestList Array
guestList.splice(0 , 1 , " Rida");

//Printing Message For Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner");


//Adding a new guest ar starting index of Array
guestList.unshift("Shifra");

//Adding a new guest at ending index of Array
guestList.push("Janita")

//Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0 , "Ayesha");

//Print message of Updated List
console.log("Updated List of our Guest")


//Sending a invitation message to our gest one by one with their name 
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));
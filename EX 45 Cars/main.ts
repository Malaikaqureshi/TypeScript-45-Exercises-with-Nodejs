//Define a function to create a a Car object with optional options ...
function create_cars(manufacturer , model , ...options){

    //Initialize a car object with the manufacturer and model 
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    //Add additional options to the car object
    options.forEach(option => {
        let [key , value] =option.split(":")
        car[key.trim()] = value.trim();
    });

    return car;

}

//Call the function to create a car object
let my_car = create_cars("Toyota" , "Corolla" , "color: Black" , "sunroof: True" , "Year: 2024");

//Print the variable to ensure all the information is ensured correctly in the car object
console.log(my_car);
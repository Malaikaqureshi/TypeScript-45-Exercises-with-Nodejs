//Making a Function
function make_shirt (size: string = "Large" , printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt.`)

}

//Calling a Function with By-Default Values
make_shirt();

//Calling a function now with Medium size and default message
make_shirt("Medium")

//Calling a function now with Small size and Diffferent Print Message
make_shirt("Small" , "I Love JavaScript")
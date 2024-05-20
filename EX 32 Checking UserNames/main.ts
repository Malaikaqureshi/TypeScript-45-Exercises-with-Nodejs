//List of Array of Current Users
let current_users = ["Malaika" , "Zain" , "Janita" , "Ahmed"];

//List OF Array of New Users
let new_users = ["Shifra" , "Rida" , "Ghashia" , "Janita" , "Malaika"];

//Loop through new_users to check some usernames availability
new_users.forEach(new_one_user => {
    //Making a Condition for username already exists and save in our_condition variable
    let our_condition =current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase())
    
    //Print different messages using If-Else Statements
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})





    


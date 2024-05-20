//List of Array of Current Users
var current_users = ["Malaika", "Zain", "Janita", "Ahmed"];
//List OF Array of New Users
var new_users = ["Shifra", "Rida", "Ghashia", "Janita", "Malaika"];
//Loop through new_users to check some usernames availability
new_users.forEach(function (new_one_user) {
    //Making a Condition for username already exists and save in our_condition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    //Print different messages using If-Else Statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});

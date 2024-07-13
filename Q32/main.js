"use strict";
//make a current user array
let Current_users = ["Maha", "zunaira", "Amna", "rabisha", "hoorain"];
//making new user array
let New_users = ["noor", "maha", "Rabisha", "meerab", "Sehar"];
//loop through the array for checking new users availability
New_users.forEach(new_one_users => {
    let our_conditions = Current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase());
    if (our_conditions) {
        console.log(`sorry ${new_one_users} is already taken `);
    }
    else {
        console.log(` This User ${new_one_users} is available to use `);
    }
});

"use strict";
//making an array 
let UserName = ["Muneeb", "faizullah", "saifullah", "admin", "jamal"];
UserName = [];
if (UserName.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    UserName.forEach(user1 => {
        //by using foreach loop in array
        if (user1 === "admin") {
            console.log(`Hello ${user1},would you like to see status report`);
        }
        else {
            console.log(`${user1},thank for loging again`);
        }
    });
}

//making an array
var UserName = ["Muneeb", "faizullah", "saifullah", "admin", "jamal"];
UserName.forEach(function (user1) {
    //by using foreach loop in array
    if (user1 === "admin") {
        console.log("Hello ".concat(user1, ",would you like to see status report"));
    }
    else {
        console.log("".concat(user1, ",thank for loging again"));
    }
});

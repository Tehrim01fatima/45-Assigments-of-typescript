var GuestName = ["iqra", "sawera", "tuba"];
var NotComing = GuestName[1];
console.log(NotComing, "nahi aa sakti yeh behn");
GuestName.splice(0, 0, "iqra bano");
GuestName.forEach(function (guest) { return console.log("salam ".concat(GuestName, ",would you like to dinner with me")); });

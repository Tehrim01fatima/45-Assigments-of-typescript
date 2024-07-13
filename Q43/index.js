//define the function to show magicians names
function show_magician(magiciansName) { magiciansName.forEach(function (name) { return console.log(name); }); }
;
//function  to make magicians great through .map()it will modify arraay
function make_great(magicians) { return magicians.map(function (name) { return "The Great ".concat(name); }); }
;
//define an array of magicians name
var magicians_name = ["Gob Bluth", "Merlin", "Harry Potter", "Gandalf"];
//making a copy of original array through .slice()function
var copy_magicians_names = magicians_name.slice();
//modify the copied aray to include"the greay"with their names
var copy_great_magicians = make_great(copy_magicians_names);
//show both array original and copied
//original
console.log("original array\n");
show_magician(magicians_name);
//copied 
console.log("\ncopied array \n");
show_magician(copy_great_magicians);

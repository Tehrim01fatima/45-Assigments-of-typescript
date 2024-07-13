//define the function to show magicians names
function show_magician(magiciansName) { magiciansName.forEach(function (name) { return console.log(name); }); }
//function  to make magicians great through .map()it will modify arraay
function make_great(magicians) { return magicians.map(function (name) { return "The Great ".concat(name); }); }
//define an array of magicians name
//let magicians_name =["Gob Bluth","Merlin","Harry Potter","Gandalf"]
//call the function make_great to modifythe array magicians names
//let great_magician= make_great(magicians_name)
//call show_magicians that show modified list of magicians
//show_magician(great_magician)

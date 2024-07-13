//define the function to show magicians names
function show_magician (magiciansName:string[]) 
 {magiciansName.forEach (name => console.log(name) )};
//function  to make magicians great through .map()it will modify arraay
 function make_great(magicians:string[])
{return magicians.map(name =>`The Great ${name}`)  };

//define an array of magicians name
let magicians_name =["Gob Bluth","Merlin","Harry Potter","Gandalf"];

//making a copy of original array through .slice()function
let copy_magicians_names= magicians_name.slice();

//modify the copied aray to include"the greay"with their names
let copy_great_magicians= make_great(copy_magicians_names);

//show both array original and copied

//original
console.log("original array\n");
 show_magician(magicians_name);
 
 //copied 
 console.log("\ncopied array \n");
 show_magician(copy_great_magicians);


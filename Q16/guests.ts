//guests name array;
let dinnerGuests=["hafsa ","kashaf","haya","dua","areej","abirah"]
//guests who is not coming;
let guestnotcoming=dinnerGuests[0];
console.log(guestnotcoming,"nahi aa sakti");
//add or remove values from guests lists array;
dinnerGuests.splice(0,1 ,"ersa");
//print message for bigger table;
console.log("Good news!found a bigger table for dinner");
//add new value in the starting index of an array;
dinnerGuests.unshift("rabisha")
//add a new value in index of ending of an array;
dinnerGuests.push("muntaha");
//add a new guest in the middle index;
let middleIndex:number= Math.floor(dinnerGuests.length/2);
//ading a new new guests to middle indexof array;
dinnerGuests.splice(middleIndex,0,"halima","jannat");
console.log("updated list of our guests");
dinnerGuests.forEach(OneGuest=>console.log(`salam ${OneGuest},wouldyou like to like to eat dinner with me`))


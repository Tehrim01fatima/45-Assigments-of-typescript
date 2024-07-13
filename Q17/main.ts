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

// print  a message to invite for dinner to only two guests;
console.log("unfortunately , the new table is not aviable at the time, so i can only invite two guests to dinner with me");
//using while loop for remove guests name from the array until the two remains

while (dinnerGuests.length >2) {
    let removeGuests = dinnerGuests.pop ()
    console.log(`sorry ${removeGuests} i cant invite you for dinner with me`);
    
}
console.log("invitation for the last two guests");


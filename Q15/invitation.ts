let GuestName =["iqra" ,"sawera","tuba"];
let NotComing  = GuestName[1];
 
console.log(NotComing,"nahi aa sakti yeh behn")
GuestName.splice(0,0,"iqra bano");
GuestName.forEach (guest => console.log(`salam ${GuestName},would you like to dinner with me`)) ;

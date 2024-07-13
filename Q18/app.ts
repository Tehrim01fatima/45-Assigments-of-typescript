// make an array for countries name liketo visit;
let countriesToVisit:string[] =["turkey","SaudiaArabia", "Italy", "Canada","Spain","Japan"];
//print the original order array;
console.log("orginal order",countriesToVisit);
//print an array in alphabeticalorder without modifiying actual list;
console.log("alphabateical order",[...countriesToVisit].sort());
// print the array to show thatan array is still is in its original order;
console.log("still in original order",countriesToVisit);
//print an array in reverse order without modifiying actual list;
console.log("reverse order",[...countriesToVisit].reverse());
//print the array to show thatan array is still is in its original order;
console.log("still in original order",countriesToVisit);
//we have changed the original order;
console.log("original array reverse",countriesToVisit.reverse());
//back to original order;
console.log("back to orignal order",countriesToVisit.reverse ());
// orignal order sort in alphabatcial order;
console.log("sorted in orginal order",countriesToVisit.sort());
//reverse again the orignal array
console.log("orignal array reverseda gain",countriesToVisit);




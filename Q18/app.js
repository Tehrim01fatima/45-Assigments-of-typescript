var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// make an array for countries name liketo visit;
var countriesToVisit = ["turkey", "SaudiaArabia", "Italy", "Canada", "Spain", "Japan"];
//print the original order array;
console.log("orginal order", countriesToVisit);
//print an array in alphabeticalorder without modifiying actual list;
console.log("alphabateical order", __spreadArray([], countriesToVisit, true).sort());
// print the array to show thatan array is still is in its original order;
console.log("still in original order", countriesToVisit);
//print an array in reverse order without modifiying actual list;
console.log("reverse order", __spreadArray([], countriesToVisit, true).reverse());
//print the array to show thatan array is still is in its original order;
console.log("still in original order", countriesToVisit);
//we have changed the original order;
console.log("original array reverse", countriesToVisit.reverse());
//back to original order;
console.log("back to orignal order", countriesToVisit.reverse());
// orignal order sort in alphabatcial order;
console.log("sorted in orginal order", countriesToVisit.sort());
//reverse again the orignal array
console.log("orignal array reverseda gain", countriesToVisit);

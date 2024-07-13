//making an array
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//using through loop
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var OneNumbers = Numbers_1[_i];
    var OrdinalEnding = void 0;
    if (OneNumbers === 1) {
        OrdinalEnding = "st";
    }
    else if (OneNumbers === 2) {
        OrdinalEnding = "nd";
    }
    else if (OneNumbers === 3) {
        OrdinalEnding = "rd";
    }
    else {
        OrdinalEnding = "th";
    }
    console.log("".concat(OneNumbers).concat(OrdinalEnding));
}

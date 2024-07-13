//define a function with a rest parameter that accept items arguments represting our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\n Now Enjoy Sandwich");
}
//call the function 3 times with 3 different number of arguments
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "mayo", "cucumber", "egg", "cheese", "sauce", "chickhen");

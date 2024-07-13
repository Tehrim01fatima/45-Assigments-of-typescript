//creating a function with parameter which return value in string
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
//calling a function and print value in return
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Istanbul", "turkiye"));
console.log(city_country("Barcelona", "Spain"));

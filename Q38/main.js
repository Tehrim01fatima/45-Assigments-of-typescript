function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in  ").concat(Country));
}
//calling function with default parameter 
describe_city("karachi");
describe_city("Lahore");
//function for three different cities which is not in the default country.
describe_city("Tokyo", "Japan");
describe_city("Istanbul", "Turkey");
describe_city("Sydney", "Austraila");

function describe_city(City:string,Country:string="Pakistan"){
    console.log(`${City} is in  ${Country}`);

}
//calling function with default parameter 
describe_city("karachi")

describe_city("Lahore")


//function for three different cities which is not in the default country.
describe_city("Tokyo", "Japan")
describe_city("Istanbul", "Turkey")
describe_city("Sydney","Austraila")



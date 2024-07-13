//define a function to create a car object with optional options...
function create_car(manufacturer,model,...options){
    //intialize  a car object with manufacturer and model
    let car= {
        manufacturer: manufacturer,
        model: model
    };
    //add additional options to the car object
    options.forEach(options =>{
        let[key ,value]=options.split(":")
        car[key.trim()]=value.trim();

    })
return car;
}
//call the function to create a car object
let my_car = create_car("toyota","crolla","color:black","sunroof:true");
//print the varaible to the ensure all the information in car object
console.log(my_car);

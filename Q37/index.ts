//making a function of make_shirt with default peramater
function make_shirt (size:string="large",Printmessage:string="I LOVE TYPESCRIPT"){
//print message on large shirt with  the default parameter
console.log(`creating a ${size} shirt with  ${Printmessage} printing on it`);
}
//calling function by default value 
make_shirt()

//print message on medium shirt with  the default parameter

make_shirt("medium")

//print message on small shirt with different message

make_shirt("small", "I LOVE CODING")
//making an array
let Numbers=[1,2,3,4,5,6,7,8,9,10]
 
//using through loop
for(let OneNumbers of Numbers) {
let OrdinalEnding:string

    if (OneNumbers === 1) 
        {OrdinalEnding="st"
        
    }
    else if(OneNumbers === 2){
        OrdinalEnding ="nd"
    
    }
    else if(OneNumbers === 3){
        OrdinalEnding ="rd"
        
    }
    else{
        OrdinalEnding ="th"
        
    }
console.log(`${OneNumbers}${OrdinalEnding}`);

}
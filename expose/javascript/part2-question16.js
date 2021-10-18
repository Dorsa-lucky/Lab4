let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

console.log("print out the value of property starts with the letter r: ");
for (let prop in statistics){

    if(prop.charAt(0) == 'r'){
        
        console.log(statistics[prop]);
    }
    
}

console.log("print out the property which has a value of an odd number: ");
for(let prop in statistics){
    
    if(statistics[prop] % 2 == 1){

        console.log(statistics[prop]);
    }
}



function solve(arr) {
    let parking = new Set();
    for(let el of arr) {
        let [comm, carN] = el.split(', ');
        if(comm == 'IN') {
            parking.add(carN);
        } else {
            parking.delete(carN);
            
        }
        
    } let sortArr = Array.from(parking);
    sortArr.sort();
    if(parking.size < 1) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortArr.join('\n'));
    }
    
    
    
    
}


//solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);





solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
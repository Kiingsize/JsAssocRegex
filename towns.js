function solve(arr) {

for(let el of arr) {
    
let [townName, latitude, longitude] = el.split(' | ');

latitude = Number(latitude).toFixed(2);
 longitude = Number(longitude).toFixed(2);
let obj = { town: townName, latitude: latitude, longitude: longitude};
   console.log(obj);
}

   
    
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);

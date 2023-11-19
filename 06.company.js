function solve(arr) {
let companies = {};

    for(let entry of arr) {
        let [compName, id] = entry.split(' -> ');
        if(compName in companies) {
            if(!companies[compName].includes(id)) {
                companies[compName].push(id);

            }
        } else {
            companies[compName] = [id];
        }
    }
    let entries = Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0])); 
   for(let [name, employee] of entries) {
    console.log(name);
    employee.forEach(ids => console.log(`-- ${ids}`));
   }
 console.log(entries);
}

solve(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
function solve(arr) {
    let countries = {};
    // let towns = {};

    for (let entry of arr) {
        let [country, town, priceCostStr] = entry.split(' > ');
        let priceCost = Number(priceCostStr);

        if (!(country in countries)) {
            countries[country] = {};
        }

        if (!(town in countries[country]) || countries[country][town] > priceCost) {
            countries[country][town] = priceCost;
        }
     
   
      
    }

let sortedCountries = Object.keys(countries).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let sortedTowns = Object.entries(countries[country])
            .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
            .map(([town, cost]) => `${town} -> ${cost}`)
            .join(' ');

        console.log(`${country} -> ${sortedTowns}`);
    }
   
    
    
    
}

solve(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);

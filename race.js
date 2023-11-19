function solve(arr) {
   let list = arr.shift().split(', ');
   let results = {};
   list.forEach(name => results[name] = 0);

    let command = arr.shift();
    let letPattern = /[A-Za-z]/g;
    let digPattern = /[\d]/g

while(command != 'end of race') {
    let letMatch = command.match(letPattern);
    let digMatch = command.match(digPattern);
    if(letMatch && digMatch) {
        let name = letMatch.join('');
        let dist = digMatch.map(Number).reduce((acc, vall) => (acc + vall));
          if(name in results) {
            results[name] += dist;
          }     
      }
   

    command = arr.shift();

}  let entries = Object.entries(results).sort((a,b) => b[1] - a[1]);
console.log(`1st place: ${entries[0][0]}`);
console.log(`2nd place: ${entries[1][0]}`);
console.log(`3rd place: ${entries[2][0]}`);

}

solve(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);

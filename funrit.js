function solve(arr) {
   let totalPrice = 0;
    let command = arr.shift();
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
      let items = [];

   while(command != 'Purchase') {
    let match = command.match(pattern);

     if(match) {
        let { name, price , qty} = match.groups;
       let cost = Number(price) * Number(qty);
       totalPrice += cost;
       items.push(name);

     }

     command = arr.shift();

   }
   console.log("Bought furniture:");
    if(items.length > 0) {
        console.log(items.join('\n'));
    } 
        console.log(`Total money spend: ${totalPrice.toFixed(2)}`); 
    
}

solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);


solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
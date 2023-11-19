function solve(stock, orderedProducts) {
 let products = {};
  
 for(let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let qty = Number(stock[i + 1]);
    products[productName] = qty;
 }
 
 for(let j = 0; j < orderedProducts.length; j += 2) {
    let productName = orderedProducts[j];
    let qty = Number(orderedProducts[j + 1]);
    if(productName in products) {
        products[productName] += qty;
    } else {
        products[productName] = qty;
    }
 } let entries = Object.entries(products);
 for (let entry of entries) {
    console.log(entry.join(' -> '));
 }

}


solve();

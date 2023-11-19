let n1 = 'test';
let n2 = 'test2';
let n3 = 'test';
let n4 = 'test4';


let asd = new Set();
asd.add(n1);
asd.add(n2);
if(asd.size > 1) {
    asd.add(n4)
    asd.delete(n1);
}

// console.log(asd);

let a = Set.entries(asd);
console.log(a);



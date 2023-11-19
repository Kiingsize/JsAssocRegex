function solve(arr) {
 for(i = 0; i < arr.length; i++) {
    let person = { name: arr[i], personalNum: arr[i].length }; 
    console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
} 
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );

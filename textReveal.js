function solve(wordStr, text) {
let words = wordStr.split(', ');

for(let word of words) {
    let repeatCount = word.length;
    let starTemplate = '*'.repeat(repeatCount);
    text = text.replace(starTemplate, word);

}
console.log(text);

}


solve();

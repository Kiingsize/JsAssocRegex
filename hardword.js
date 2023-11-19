function solve(arr) {
let [letter, wordsArr] = arr;

let letterWords = letter.split(' ');
let missedWordSlots = letterWords.filter(word => word.includes('_'));

for(let slot of missedWordSlots) {
    if(!slot.endWith('_')) {
        slot = slot.slice(0, slot.length - 1);
    }
    let wordToFill = wordsArr.find(word => word.length == slot.length);
    letter = letter.replace(slot, wordToFill);


}
 console.log(letter);


}

solve();

function solve(str) {
let pattern = /(?<user>[a-z]+[-._]?[a-z\d]+?)@(?<mail>[a-z]+[-.]?[a-z]+[.]?[a-z]+?\.[a-z]+)/g;

let result = str.match(pattern);
console.log(result.join('\n'));


}

solve("Please contact us at: support@github.com.");
solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
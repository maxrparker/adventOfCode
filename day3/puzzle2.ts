import * as fs from "fs";

const file = "do()" + fs.readFileSync("./input.txt", "utf8") + "don't()"; //screw you

let start = new Date().getTime();

const groups = /(?:do\(\)).*?(?:don't\(\))/gs; //such a pain to find out I just needed the s. Why??
// Regex engine was struggling to reconcile overlapping do() and don't() groups. Why would the s flag fix that??
const mul = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;

let match;
let matchMul;
let result = 0;

while ((match = groups.exec(file)) !== null) {
  while ((matchMul = mul.exec(match[0])) !== null) {
    result += matchMul[1] * matchMul[2];
  }
}

let end = new Date().getTime();

console.log(result); //111762583

console.log("Execution time: " + (end - start) + "ms"); //0ms

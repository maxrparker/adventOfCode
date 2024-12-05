import * as fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

let match;
const regex = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;

let result = 0;

while ((match = regex.exec(file)) !== null) {
  result += match[1] * match[2];
}

let end = new Date().getTime();

console.log(result);

console.log("Execution time: " + (end - start) + "ms");

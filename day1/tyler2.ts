import * as fs from "fs";

let sum2 = 0;
const list1 = [];
const list2 = [];

let input = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

let inputArray = input.split("\n");
let inputArrayFiltered = inputArray.filter((elm) => elm);

for (let line of inputArrayFiltered) {
  const splitInput = line.split("   ");

  list1.push(splitInput[0]);
  list2.push(splitInput[1]);
}

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

for (let i = 0; i < list1.length; i++) {
  const value = list1[i];

  sum2 += value * list2.filter((num) => num === value).length;
}

let end = new Date().getTime();

console.log("Execution time: " + (end - start) + "ms");

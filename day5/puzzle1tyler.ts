import * as fs from "fs";

const year = 2024;
const day = 5;
const part = "A";
let sum = 0;

const input = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

const inputSplit = input.toString().split(/\r\n\r\n/);

const ruleArray = inputSplit[0].split("\r\n");
let updateArray = inputSplit[1].split("\r\n");
const ruleOrder = [];

for (let line of ruleArray) {
  let order = line.split("|");
  let re = new RegExp(order[1] + ".*" + order[0]);
  let badLines = [];
  for (let i = 0; i < updateArray.length; i++) {
    if (re.test(updateArray[i])) {
      badLines.push(updateArray[i]);
    }
  }
  updateArray = updateArray.filter((item) => !badLines.includes(item));
}

for (let i = 0; i < updateArray.length; i++) {
  const validSequence = updateArray[i].split(",");
  const middleValue = validSequence[Math.floor(validSequence.length / 2)];
  sum += +middleValue;
}

let end = new Date().getTime();
console.log("Execution time: " + (end - start) + "ms");

console.log(sum);

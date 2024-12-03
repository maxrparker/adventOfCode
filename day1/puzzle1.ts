import * as fs from "fs";

const list = fs.readFileSync("input.txt", "utf8");

const regex = /(\d+)\s+(\d+)/g; // doing this in case they try to be sneaky and mix tabs in.

const listLeft = [];
const listRight = [];

let match;
while ((match = regex.exec(list)) !== null) {
  listLeft.push(match[1]);
  listRight.push(match[2]);
}

listLeft.sort((a, b) => a - b);
listRight.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < listLeft.length; i++) {
  result += Math.abs(parseInt(listLeft[i]) - parseInt(listRight[i]));
}

console.log(result); //2086478

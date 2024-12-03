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

let result = 0;

let countRight: { [key: string]: number } = {};

for (let i = 0; i < listRight.length; i++) {
  const keyRight = listRight[i];
  if (!countRight[keyRight]) {
    countRight[keyRight] = 0;
  }
  countRight[keyRight] += 1;
}

for (let i = 0; i < listLeft.length; i++) {
  if (countRight[listLeft[i]]) {
    result += countRight[listLeft[i]] * listLeft[i];
  }
}

console.log(result); //24941624

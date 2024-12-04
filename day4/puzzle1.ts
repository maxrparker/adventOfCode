import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

// I'm going to redo this as an array, but I thought it would be funny to try to use regex first.
// Although the idea was mine, logic to rotate the array came from chat. Didn't want this to be actual solutions anywways.
// Just wanted to see if it compared in speed.

let start = new Date().getTime();

const word = "XMAS";
let count = (input.match(new RegExp(word, "g")) || []).length;
count += (input.match(new RegExp(word.split("").reverse().join(""), "g")) || []).length;

const rotated = input
  .split("\n")
  .map(row => [...row])
  .reverse()
  .reduce((a, row) => row.map((_, i) => (a[i] || "") + row[i]), []);

const rotatedStr = rotated.join("\n");

count += (rotatedStr.match(new RegExp(word, "g")) || []).length;
count += (rotatedStr.match(new RegExp(word.split("").reverse().join(""), "g")) || []).length;

const lines = input.split("\n");
const diagonal1 = [];

for (let row = 0; row < lines.length; row++) {
  for (let col = 0; col < lines[row].length; col++) {
    const diagIndex = row + col;
    if (!diagonal1[diagIndex]) {
      diagonal1[diagIndex] = "";
    }
    diagonal1[diagIndex] += lines[row][col];
  }
}

const diagonalStr = diagonal1.join("\n");

count += (diagonalStr.match(new RegExp(word, "g")) || []).length;
count += (diagonalStr.match(new RegExp(word.split("").reverse().join(""), "g")) || []).length;

const diagonalRightStr = {};

for (let row = 0; row < lines.length; row++) {
  for (let col = 0; col < lines[row].length; col++) {
    const diagIndex = col - row;
    if (!diagonalRightStr[diagIndex]) {
      diagonalRightStr[diagIndex] = "";
    }
    diagonalRightStr[diagIndex] += lines[row][col];
  }
}

const orderedDiagonals = Object.keys(diagonalRightStr)
  .sort((a: any, b: any) => a - b)
  .map(key => diagonalRightStr[key]);

const diagRightStr = orderedDiagonals.join("\n");

count += (diagRightStr.match(new RegExp(word, "g")) || []).length;
count += (diagRightStr.match(new RegExp(word.split("").reverse().join(""), "g")) || []).length;

console.log(count); //2336

let end = new Date().getTime();

console.log("Execution time: " + (end - start) + "ms"); //8ms

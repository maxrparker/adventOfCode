import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

let count = 0;

const inputArray = input.split("\n").map((row) => [...row]);

// console.log(inputArray);

for (let i = 0; i < inputArray.length; i++) {
  for (let j = 0; j < inputArray[i].length; j++) {
    if (
      j >= 3 &&
      inputArray[i][j] === "X" &&
      inputArray[i][j - 1] === "M" &&
      inputArray[i][j - 2] === "A" &&
      inputArray[i][j - 3] === "S"
    )
      count++;
    if (
      j <= inputArray.length - 4 &&
      inputArray[i][j] === "X" &&
      inputArray[i][j + 1] === "M" &&
      inputArray[i][j + 2] === "A" &&
      inputArray[i][j + 3] === "S"
    )
      count++;
    if (
      i >= 3 &&
      inputArray[i][j] === "X" &&
      inputArray[i - 1][j] === "M" &&
      inputArray[i - 2][j] === "A" &&
      inputArray[i - 3][j] === "S"
    )
      count++;
    if (
      i <= inputArray.length - 4 &&
      inputArray[i][j] === "X" &&
      inputArray[i + 1][j] === "M" &&
      inputArray[i + 2][j] === "A" &&
      inputArray[i + 3][j] === "S"
    )
      count++;
    if (
      i >= 3 &&
      j >= 3 &&
      inputArray[i][j] === "X" &&
      inputArray[i - 1][j - 1] === "M" &&
      inputArray[i - 2][j - 2] === "A" &&
      inputArray[i - 3][j - 3] === "S"
    )
      count++;
    if (
      i <= inputArray.length - 4 &&
      j <= inputArray.length - 4 &&
      inputArray[i][j] === "X" &&
      inputArray[i + 1][j + 1] === "M" &&
      inputArray[i + 2][j + 2] === "A" &&
      inputArray[i + 3][j + 3] === "S"
    )
      count++;
    if (
      i >= 3 &&
      j <= inputArray.length - 4 &&
      inputArray[i][j] === "X" &&
      inputArray[i - 1][j + 1] === "M" &&
      inputArray[i - 2][j + 2] === "A" &&
      inputArray[i - 3][j + 3] === "S"
    )
      count++;
    if (
      j >= 3 &&
      i <= inputArray.length - 4 &&
      inputArray[i][j] === "X" &&
      inputArray[i + 1][j - 1] === "M" &&
      inputArray[i + 2][j - 2] === "A" &&
      inputArray[i + 3][j - 3] === "S"
    ) {
      count++;
    }
  }
}

let end = new Date().getTime();

console.log("Execution time: " + (end - start) + "ms"); //5ms

console.log(count); //2336

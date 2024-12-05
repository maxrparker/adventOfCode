import * as fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

let count = 0;

const inputArray = input.split("\n").map(row => [...row]);

for (let i = 1; i < inputArray.length - 1; i++) {
  for (let j = 0; j < inputArray[i].length - 1; j++) {
    if (inputArray[i][j] == "A") {
      if (
        ((inputArray[i - 1][j - 1] == "M" && inputArray[i + 1][j + 1] == "S") ||
          (inputArray[i - 1][j - 1] == "S" && inputArray[i + 1][j + 1] == "M")) &&
        ((inputArray[i - 1][j + 1] == "M" && inputArray[i + 1][j - 1] == "S") ||
          (inputArray[i - 1][j + 1] == "S" && inputArray[i + 1][j - 1] == "M"))
      ) {
        count++;
      }
    }
  }
}

let end = new Date().getTime();

console.log("Execution time: " + (end - start) + "ms"); //1ms

console.log(count);

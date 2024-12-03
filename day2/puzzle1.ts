import * as fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

const report = file.split("\n").map((line) => {
  // this could be way faster but f it.
  return line.split(" ").map((num) => parseInt(num));
});

let reportCount = 0;

let asc = null;
for (let i = 0; i < report.length; i++) {
  if (report[i][0] > report[i][1]) {
    // look at this junior C looking piece of c
    asc = false;
  } else if (report[i][0] < report[i][1]) {
    asc = true;
  }

  let good = true;

  for (let j = 0; j <= report[i].length - 1; j++) {
    if (asc === true) {
      if (
        report[i][j] > report[i][j + 1] ||
        report[i][j] + 3 < report[i][j + 1] ||
        report[i][j] == report[i][j + 1]
      ) {
        good = false;
        break;
      }
    } else {
      if (
        report[i][j] < report[i][j + 1] ||
        report[i][j] > report[i][j + 1] + 3 ||
        report[i][j] == report[i][j + 1]
      ) {
        good = false;
        break;
      }
    }
  }

  if (good) {
    reportCount++;
  }
}

let end = new Date().getTime();

console.log("Execution time: " + (end - start) + "ms");

console.log(reportCount); //483

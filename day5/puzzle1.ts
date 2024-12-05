import * as fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

let start = new Date().getTime();

let match;

const split = file.split("\r\n\r\n");
const list = split[0].split("\r\n").map((line) => {
  return line.split("|");
});
const manuals = split[1].split("\r\n");

let count = 0;

for (let i = 0; i < manuals.length; i++) {
  let goodManual = true;
  for (let j = 0; j < list.length; j++) {
    const regexStr = "(:?^|,)(" + list[j][1] + ".*?," + list[j][0] + ")";
    const regex = new RegExp(regexStr, "g");
    match = regex.exec(manuals[i]);
    if (match !== null) {
      goodManual = false;
      break;
    }
  }
  if (goodManual) {
    let manualLine = manuals[i].split(",");
    count += parseInt(manualLine[(manualLine.length - 1) / 2]);
  }
}

let end = new Date().getTime();

console.log(count);

console.log("Execution time: " + (end - start) + "ms");

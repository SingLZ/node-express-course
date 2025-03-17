const { writeFileSync, readFileSync, read } = require("fs");
writeFileSync("./temporary/fileA.txt", "Hello World ");
writeFileSync("./temporary/fileA.txt", "Hello World1 ", { flag: "a" });
writeFileSync("./temporary/fileA.txt", "Hello World2 ", { flag: "a" });

const finalContent = readFileSync("./temporary/fileA.txt", "utf-8");
console.log(finalContent);
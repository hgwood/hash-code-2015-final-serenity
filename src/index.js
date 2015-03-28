"use strict";

var fs = require("fs");
var solve = require("./solve");

var inputFile = process.argv[2] || "./input.txt";
var outputFile = process.argv[3] || "./output.txt";

fs.readFile(inputFile, function(readFileErr, input) {
  if (readFileErr) throw readFileErr;
  var output = solve(input);
  fs.writeFile(outputFile, output, function(writeFileErr) {
    if (writeFileErr) throw writeFileErr;
  });
});

"use strict";

var test = require("tape");
var parse = require("parse");

test("ça parse", function(t) {
  t.deepEqual(parse("3 4 2 4\nTHTH\nHTTH\nTHHH"), {
    nrows: 3,
    ncols: 4,
    minHam: 2,
    maxSize: 4,
    pizza: [[false, true, false, true], [true, false, false, true], [false, true, true, true]]
  });
  t.end();
});

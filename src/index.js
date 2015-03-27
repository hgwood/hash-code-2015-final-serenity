"use strict";

var highland = require("highland");
var solve = require("solve");

highland(process.stdin)
  .invoke("toString")
  .reduce1(highland.add)
  .map(solve)
  .pipe(process.stdout);

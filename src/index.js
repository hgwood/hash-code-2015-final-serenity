"use strict";

var highland = require("highland");
var toStream = require("highland-tostream-reducer");
var solve = require("solve");

highland(process.stdin)
  .invoke("toString")
  .reduce1(toStream(highland.add))
  .map(solve)
  .pipe(process.stdout);

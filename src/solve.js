"use strict";

var _ = require("lodash");
var parse = require("./parse");
var unparse = require("./unparse");

module.exports = _.flow(parse, solve, unparse);

function solve(input) {
  return "solved";
}
"use strict";

var test = require("tape");
var parse = require("parse");
var unparse = require("unparse");

test("this is a dummy test", function(t) {
  t.ok(true);
  t.end();
});

test("parse", function(t) {
  t.deepEqual(parse(""), {});
  t.end();
});

test("unparse", function(t) {
  t.equal(unparse({}), "[object Object]");
  t.end();
});

"use strict";

var test = require("tape");
var unparse = require("unparse");

test("ça unparse", function(t) {
  t.equal(unparse([{left: 0, top: 1, right: 2, bottom: 3}, {left: 8, top: 7, right: 6, bottom: 5}]), "2\n0 1 2 3\n8 7 6 5");
  t.end();
});

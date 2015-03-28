"use strict";

var test = require("tape");
var parse = require("parse");
var unparse = require("unparse");

test("this is a dummy test", function(t) {
  t.ok(true);
  t.end();
});

test("parse", function(t) {
  t.deepEqual(parse("2 2 2\n1 1 1 2\n0 0\n1 1\n0 1 0 1\n1 0 1 0\n0 0 1 1\n1 0 0 1"), {
    nx: 2,
    ny: 2,
    nz: 2,
    ntargets: 1,
    range: 1,
    nloons: 1,
    nsteps: 2,
    home: {x: 0, y: 0},
    targets: [{x: 1, y: 1}],
    winds: [
      [
        [{y: 0, x: 1}, {y: 0, x: 1}],
        [{y: 1, x: 0}, {y: 1, x: 0}]
      ],
      [
        [{y: 0, x: 0}, {y: 1, x: 1}],
        [{y: 1, x: 0}, {y: 0, x: 1}]
      ]
    ]
  });
  t.end();
});

test("unparse", function(t) {
  t.equal(unparse({}), "[object Object]");
  t.end();
});

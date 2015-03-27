"use strict";

var test = require("tape");
var findMyBestPartAround = require("eval-around");



test("ça parccourre", function(t) {
    var sample = [
        [false, true, false, true, false, false, false, true],
        [false, false, false, false, false, false, true, true],
        [false, false, false, false, true, false, true, false]
    ];
    t.deepEqual(findMyBestPartAround({
        nrows: 3,
        ncols: 8,
        minHam: 1,
        maxSize: 2,
        pizza: sample
    }, 0, 0), { bottom: 0, left: 0, right: 1, top: 0 });
    t.end();
});

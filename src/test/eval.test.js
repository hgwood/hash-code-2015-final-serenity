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
        minHam: 2,
        maxSize: 2,
        pizza: sample
    }, 0, 0), {
        nrows: 3,
        ncols: 4,
        minHam: 2,
        maxSize: 4,
        pizza: [[false, true, false, true], [true, false, false, true], [false, true, true, true]]
    });
    t.end();
});

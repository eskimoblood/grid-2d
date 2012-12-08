/*global buster:false */
/*global describe:false */
/*global assert:false */
/*global before:false */
/*global Grid:false */
/*global it:false */

buster.spec.expose();

describe("Grid", function() {
  var grid;
  var gridWidth = 5;
  var gridHeight = 10;
  describe('unwrapped', function() {
    before(function() {
      grid = new Grid(gridWidth, gridHeight);
      fillGrid(grid, gridWidth, gridHeight);
    });

    it("returns a value at position", function() {
      buster.assert.equals(grid.at(3, 2), 13);
    });

    it("returns a value on top", function() {
      buster.assert.equals(grid.atTop(3, 2), 8);
    });

    it("returns a value on bottom", function() {
      buster.assert.equals(grid.atBottom(3, 2), 18);
    });

    it("returns a value on left", function() {
      buster.assert.equals(grid.atLeft(3, 2), 12);
    });

    it("returns a value on right", function() {
      buster.assert.equals(grid.atRight(3, 2), 14);
    });

    it("returns undefined on top in the first row", function() {
      buster.refute.defined(grid.atTop(3, 0));
    });

    it("returns undefined on bottom in the first row", function() {
      buster.refute.defined(grid.atBottom(3, 9));
    });

    it("returns undefined for first column", function() {
      buster.refute.defined(grid.atLeft(0, 3));
    });

    it("returns undefined for the last column", function() {
      buster.refute.defined(grid.atRight(4, 3));
    });
  });
  describe('wrapped', function() {

    before(function() {
      grid = new Grid(gridWidth, gridHeight, true);
      fillGrid(grid, gridWidth, gridHeight);
    });

    it("returns undefined on top in the first row", function() {
      buster.assert.equals(grid.atTop(3, 0), 48);
    });

    it("returns undefined on bottom in the first row", function() {
      buster.assert.equals(grid.atBottom(3, 9), 3);
    });

    it("returns undefined for first column", function() {
      buster.assert.equals(grid.atLeft(0, 3), 19);
    });

    it("returns undefined for the last column", function() {
      buster.assert.equals(grid.atRight(4, 3), 15);
    });
  });

});

function fillGrid(grid, gridWidth, gridHeight) {
  for (var i = 0; i < gridWidth * gridHeight; i++) {
    grid.push(i);
  }
}

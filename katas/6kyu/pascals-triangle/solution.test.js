const pascalsTriangle = require("./solution");

describe("Basic tests", function() {
  it("Level 1 triangle", function() {
    expect(pascalsTriangle(1)).toStrictEqual([1]);
  });
  it("Level 2 triangle", function() {
    expect(pascalsTriangle(2)).toStrictEqual([1,1,1]);
  });
  it("Level 4 triangle", function() {
    expect(pascalsTriangle(4)).toStrictEqual([1,1,1,1,2,1,1,3,3,1]);
  });
  it("Level 6 triangle", function() {
    expect(pascalsTriangle(6)).toStrictEqual([1,1,1,1,2,1,1,3,3,1,1,4,6,4,1,1,5,10,10,5,1]);
  });
});
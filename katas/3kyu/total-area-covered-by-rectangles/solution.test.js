const calculate = require('./solution');

describe("basic cases", function() {
  it("0 rectangles: calculate([]) should return 0", function() {
    expect(calculate([])).toBe(0);
  });

  it("1 rectangle: calculate([[0,0,1,1]]) should return 1", function() {
    expect(calculate([[0,0,1,1]])).toBe(1);
  });

  it("1 rectangle (version 2): calculate([[0, 4, 11, 6]]]) should return 22", function() {
    expect(calculate([[0, 4, 11, 6]])).toBe(22);
  });

  it("2 rectangles: calculate([[0,0,1,1], [1,1,2,2]]) should return 2", function() {
    expect(calculate([[0,0,1,1], [1,1,2,2]])).toBe(2);
  });

  it("2 rectangle (version 2): calculate([[0,0,1,1], [0,0,2,2]]) should return 4", function() {
    expect(calculate([[0,0,1,1], [0,0,2,2]])).toBe(4);
  });

  it("3 rectangle: calculate([[3,3,8,5], [6,3,8,9],[11,6,14,12]]) should return 36 ", function() {
    expect(calculate([[3,3,8,5], [6,3,8,9],[11,6,14,12]])).toBe(36);
  });
});
describe("More fixed cases", function() {
  it("1 under 2", function() {
    expect(calculate([ [ 1, 7, 3, 10 ],  [ 1, 8, 3, 9 ]])).toBe(6);
  });
  it("nested", function() {
    expect(calculate([ [ 6, 7, 9, 10 ],  [ 7, 8, 8, 9 ]])).toBe(9);
  });
  it("nested 2", function() {
    expect(calculate([ [ 1, 7, 4, 10 ],  [ 2, 7, 4, 9 ],  [ 3, 7, 4, 9 ]])).toBe(9);
  });
  it("intersection up", function() {
    expect(calculate([ [ 1, 1, 4, 3 ],  [ 2, 2, 3, 4 ]])).toBe(7);
  });
  it("intersetion right", function() {
    expect(calculate([ [ 5, 0, 7, 3 ],  [ 6, 1, 8, 2 ]])).toBe(7);
  });
  it("intersection up right", function() {
    expect(calculate([ [ 9, 0, 11, 2 ],  [ 10, 1, 12, 3 ]])).toBe(7);
  });
  it("intersection down", function() {
    expect(calculate([ [ 13, 1, 16, 3 ],  [ 14, 0, 15, 2 ]])).toBe(7);
  });
  it("intersection down right", function() {
    expect(calculate([ [ 17, 1, 19, 3 ],  [ 18, 0, 20, 2 ]])).toBe(7);
  });
  it("intersection of the entire right side", function() {
    expect(calculate([ [ 13, 5, 15, 6 ],  [ 14, 4, 16, 7 ]])).toBe(7);
  });
  it("intersection 3 rect", function() {
    expect(calculate([ [ 1, 3, 4, 6 ],  [ 2, 1, 5, 4 ],  [ 3, 2, 6, 5 ]])).toBe(20);
  });
  it("3*3", function() {
    expect(calculate([[1,1,2,2],[2,1,3,2],[3,1,4,2],[1,2,2,3],[2,2,3,3],[3,2,4,3],[1,3,2,4],[2,3,3,4],[3,3,4,4]])).toBe(9);
  });
  it("intersection", function() {
    expect(calculate([[ 1, 1, 6, 6 ],[ 1, 3, 4, 6 ],[ 2, 3, 4, 6 ],[ 2, 4, 5, 6 ],[ 3, 5, 4, 6 ]])).toBe(25);
  });
  it("shift right", function() {
    expect(calculate([[1,1,6,6],[2,1,6,6],[3,1,6,6],[4,1,6,6],[5,2,6,5]])).toBe(25);
  });
  it("shift right down", function() {
    expect(calculate([[1,1,7,6],[2,2,8,7],[3,3,9,8],[4,4,10,9],[5,5,11,10]])).toBe(70);
  });
  it("wings", function() {
    expect(calculate([ [ 1, 4, 5, 6 ],  [ 2, 5, 6, 7 ],[ 3, 6, 7, 8 ],[ 4, 7, 8, 9 ],[ 2, 3, 6, 5 ],[ 3, 2, 7, 4 ],[ 4, 1, 8, 3 ]])).toBe(38, "wings");
  });
  it("intersection cross", function() {
    expect(calculate([ [ 9, 5, 12, 6 ],  [ 10, 4, 11, 7 ]])).toBe(5);
  });
  it("intersection 2", function() {
    expect(calculate([ [ 7, 1, 11, 7 ],  [ 8, 0, 12, 3 ],  [ 8, 4, 13, 5 ],  [ 9, 5, 14, 8 ],[ 10, 2, 15, 6 ]])).toBe(53);
  });
  it("pyramid", function() {
    expect(calculate([[1,2,6,6],[1,3,5,5],[1,1,7,7]])).toBe(36);
  });
  it("circle", function() {
    expect(calculate([[1,2,3,7],[2,1,7,3],[6,2,8,7],[2,6,7,8],[4,4,5,5]])).toBe(37);
  });
  it("one", function() {
    expect(calculate([[1,1,2,2],[1,1,2,2],[1,1,2,2],[1,1,2,2],[1,1,2,2],[1,1,2,2]])).toBe(1);
  });
  it("very hard!", function() {
    expect(calculate([[3,3,6,5],[4,4,6,6],[4,3,7,5],[4,2,8,5],[4,3,8,6],[9,0,11,4],[9,1,10,6],[9,0,12,2],[10,1,13,5],[12,4,15,6],[14,1,16,5],[12,1,17,2]])).toBe(52);
  });
  it("waterfall", function() {
    expect(calculate([[2, 2, 17, 2], [2, 2, 17, 4], [2, 2, 17, 6], [2, 2, 17, 8], [2, 2, 17, 10], [2, 2, 17, 12], [2, 2, 17, 14], [2, 2, 17, 16], [2, 2, 17, 18], [2, 2, 17, 20], [2, 2, 17, 22], [2, 2, 17, 24], [2, 2, 17, 26], [2, 2, 17, 28]])).toBe(390);
  });
});
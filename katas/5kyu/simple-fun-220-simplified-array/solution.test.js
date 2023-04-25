const simplifiedArray = require("./solution");

describe("Basic Tests", function(){
  it("It should works for basic tests.", function(){

    expect(simplifiedArray([1, 2, 3, 5, 6, 4, 2, 3])).toStrictEqual([21, 5]);

    expect(simplifiedArray([-3, 4, 5, 2, 0, -10])).toStrictEqual([1, 7, -10]);

    expect(simplifiedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual([1, 5, 4, 5, 30]);

    expect(simplifiedArray([1, 2, 3, 4, 5])).toStrictEqual([1, 5, 4, 5]);

    expect(simplifiedArray([0, 1])).toStrictEqual([1]);

    expect(simplifiedArray([-3,4,5,2,0,3])).toStrictEqual([1,7,0,3]);

    expect(simplifiedArray([-3,4,5,2,0,0,0,3])).toStrictEqual([1,7,0,3]);

  })})
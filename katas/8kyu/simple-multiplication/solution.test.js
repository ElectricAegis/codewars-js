const simpleMultiplication = require('./solution');

describe("Basic Tests", () => {
  it("Should return given argument times eight...", () => {
    expect(simpleMultiplication(2)).toBe(16);
    expect(simpleMultiplication(8)).toBe(64);
    expect(simpleMultiplication(4)).toBe(32);
  });

  it("Should return given argument times nine...", () => {
    expect(simpleMultiplication(1)).toBe(9);
    expect(simpleMultiplication(5)).toBe(45);
  });
});


const maskify = require('./solution');

describe("maskify", () => {
  it("should work for some examples", () => {
    expect(maskify("4556364607935616")).toBe('############5616');
    expect(maskify("1")).toBe('1');
    expect(maskify("11111")).toBe('#1111');
    expect(maskify("752")).toBe('752');
  });

  it("should not work for non strings", () => {
    expect(() => maskify({})).toThrow(`Unexpected argument of type: ${typeof {}}. Argument must be a string.`);
  });
});
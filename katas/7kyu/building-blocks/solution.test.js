const Block = require('./solution');

describe("Tests", () => {
  it("test", () => {
    let block = new Block([2,4,6]);

    expect(block.getWidth()).toBe(2)
    expect(block.getLength()).toBe(4)
    expect(block.getHeight()).toBe(6)
    expect(block.getVolume()).toBe(48)
    expect(block.getSurfaceArea()).toBe(88)

  });
});
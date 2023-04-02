function maskify(cc) {
  if (typeof cc != "string") {
    throw `Unexpected argument of type: ${typeof cc}. Argument must be a string.`;
  }

  if (cc.length <= 4) {
    return cc;
  }

  let lastFour = cc.slice(-4);
  return "#".repeat(cc.length - 4) + lastFour;
}

module.exports = maskify;
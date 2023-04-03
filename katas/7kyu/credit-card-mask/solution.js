/**
 * @param {string} cc
 * @param {number} trailingCharacters
 */
function maskify(cc, maskedCharacter = '#', trailingCharacters = 4) {
  if (typeof cc != "string") {
    throw `Unexpected argument of type: ${typeof cc}. Argument must be a string.`;
  }

  if (cc.length <= trailingCharacters) {
    return cc;
  }

  let lastFour = cc.slice(-trailingCharacters);
  return maskedCharacter.repeat(cc.length - trailingCharacters) + lastFour;
}

module.exports = maskify;
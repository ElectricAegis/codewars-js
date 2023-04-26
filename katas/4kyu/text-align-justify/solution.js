function getSpaceExpression(num) {
  return new RegExp(`(\\S)(\\s{${num}})(\\S)`);
}
function justify(text, width) {
  let wrapExpression = new RegExp(`(?!.{1,${width}}$)(.{1,${width}})\\s`, 'g');
  let wrappedText = text.replace(wrapExpression, '$1\n');
  let wrappedArray = wrappedText.split('\n');

  for (let i = 0; i < wrappedArray.length - 1; i++) {

    if (wrappedArray[i].indexOf(' ') !== -1) {
      let spaceSize = 1;
      while (wrappedArray[i].length < width) {
        let originalLength = wrappedArray[i].length;
        wrappedArray[i] = wrappedArray[i].replace(getSpaceExpression(spaceSize), '$1$2 $3');
        if (originalLength === wrappedArray[i].length) {
          spaceSize += 1;
        }
      }
    }
  }
  return wrappedArray.join('\n');
}


module.exports = justify;
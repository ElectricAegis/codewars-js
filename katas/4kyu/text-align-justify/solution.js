function justify(text, width) {
  let textArray = text.split(' ');
  let newText = '';
  while (textArray.length !== 0) {
    let lineArray = [{word: textArray.shift(), type: 'word'}];
    let lineLength = lineArray[0].word.length;
    while (textArray.length !== 0 && (lineLength + textArray[0].length + 1 <= width)) {
      let word = textArray.shift();
      lineArray.push({word: ' ', type: 'space'});
      lineArray.push({word: word, type: 'word'});
      lineLength += (word.length + 1);
    }
    if (lineLength <= width && textArray.length === 0) {
      newText += lineArray.map(x => x.word).join('');
    } else {
      let spaces = lineArray.filter(x => x.type === 'space');
      while (lineArray.reduce((accumulator, nextValue) => accumulator + nextValue.word.length, 0) < width) {
        let space = spaces.shift();
        space.word +=  ' ';
        if (spaces.length === 0) {
          spaces = lineArray.filter(x => x.type === 'space');
        }
      }
      newText += lineArray.map(x => x.word).join('') + '\n';
    }
  }
  return newText;
}

module.exports = justify;
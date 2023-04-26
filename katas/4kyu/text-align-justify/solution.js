function justify(text, width) {
  let regex = new RegExp(`(?!.{1,${width}}$)(.{1,${width}})\\s`, 'g');
  let wrappedText = text.replace(regex, '$1\n');
  let wrappedArray = wrappedText.split('\n');

  let newText = '';
  for(let i = 0; i < wrappedArray.length - 1; i++){
    let wordArray = wrappedArray[i].split(' ').filter(x =>x.length > 0);
    let lineArray = [{word: wordArray.shift(), isSpace: false}];
    while (wordArray.length != 0) {
      lineArray.push({word: ' ', isSpace: true});
      lineArray.push({ word: wordArray.shift(), isSpace: false})
    }

    if(lineArray.length === 1) {
      newText += wrappedArray[i] + '\n';
    } else {
      let spaces = lineArray.filter(x => x.isSpace);
      while (lineArray.reduce((accumulator, nextValue) => accumulator + nextValue.word.length, 0) < width) {
        let space = spaces.shift();
        space.word +=  ' ';
        if (spaces.length === 0) {
          spaces = lineArray.filter(x => x.isSpace);
        }
      }
      newText += lineArray.map(x => x.word).join('') + '\n';
    }
  }
  newText += wrappedArray[wrappedArray.length-1];
  return newText;
}

module.exports = justify;
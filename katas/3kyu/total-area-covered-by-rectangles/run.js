
const {plot} = require('nodeplotlib');

// const recs = [ [ 1, 7, 4, 10 ],  [ 2, 7, 4, 9 ],  [ 3, 7, 4, 9 ]];
const recs = [[3,3,8,5], [6,3,8,9],[11,6,14,12]];

const data = recs.map(rec => { return {x: [rec[0], rec[0], rec[2], rec[2], rec[0]], y: [rec[1], rec[3], rec[3], rec[1], rec[1]], type: 'scatter'}  })

plot(data);

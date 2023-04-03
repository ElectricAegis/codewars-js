/**
 * @param {number[]} rec
 * @returns {number}
 */
function calculateArea(rec) {
  let height = rec[2] - rec[0];
  let width = rec[3] - rec[1];
  return height < 0 || width < 0 ? 0 : height * width;
}

function getIntersectionRec(rec, otherRec) {
  let intersectionRec = [
    rec[0] > otherRec[0] ? rec[0] : otherRec[0],
    rec[1] > otherRec[1] ? rec[1] : otherRec[1],
    rec[2] < otherRec[2] ? rec[2] : otherRec[2],
    rec[3] < otherRec[3] ? rec[3] : otherRec[3]
  ];
  return intersectionRec;
}

function calculateIntersectionInfo(rec, otherRec) {
  let intersectionRec = getIntersectionRec(rec, otherRec);
  let intersectionArea = calculateArea(intersectionRec);
  return {intersectionArea, intersectionRec};
}

/**
 *
 * @param {number[][]} recs
 * @returns {number}
 */
function calculate(recs){
  let total = 0;
  let length = recs.length;
  for (let i = 0; i < length; i++){
    const rec = recs.shift();

    let area = calculateArea(rec);
    total += area;

    const intersectionRecs = [];
    for (let j = 0; j < recs.length; ++j) {
      let intersectionInfo = calculateIntersectionInfo(rec, recs[j]);
      if (intersectionInfo.intersectionArea != 0){
        intersectionRecs.push(intersectionInfo.intersectionRec);
      }
    }

    total -= calculate(intersectionRecs);
  }

  return total;
}

module.exports = calculate;
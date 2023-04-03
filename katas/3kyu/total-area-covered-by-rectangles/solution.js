/**
 * Calculate the area of a rectangle
 * @param {number[]} rec
 * @returns {number} area
 */
function calculateArea(rec) {
  let height = rec[2] - rec[0];
  let width = rec[3] - rec[1];
  return height < 0 || width < 0 ? 0 : height * width;
}

/**
 * Return a rectangle that is the intersection of two other rectangles
 * @param {number[]} rec
 * @param {number[]} otherRec
 * @returns {number[]} intersection rectangle
 */
function getIntersectionRec(rec, otherRec) {
  return [
    rec[0] > otherRec[0] ? rec[0] : otherRec[0],
    rec[1] > otherRec[1] ? rec[1] : otherRec[1],
    rec[2] < otherRec[2] ? rec[2] : otherRec[2],
    rec[3] < otherRec[3] ? rec[3] : otherRec[3]
  ];
}

/**
 * Return a rectangle that is the intersection of two other rectangles and it's area
 * @param {number[]} rec
 * @param {number[]} otherRec
 * @returns {{intersectionRec: number[], intersectionArea: number}} intersection rectangle info
 */
function calculateIntersectionInfo(rec, otherRec) {
  let intersectionRec = getIntersectionRec(rec, otherRec);
  let intersectionArea = calculateArea(intersectionRec);
  return {intersectionArea, intersectionRec};
}

function getIntersectingRectangles(i, recs, rec) {
  const intersectionRecs = [];
  for (let j = i + 1; j < recs.length; ++j) {
    let intersectionInfo = calculateIntersectionInfo(rec, recs[j]);
    if (intersectionInfo.intersectionArea !== 0) {
      intersectionRecs.push(intersectionInfo.intersectionRec);
    }
  }
  return intersectionRecs;
}

/**
 *
 * @param {number[][]} recs
 * @returns {number}
 */
function calculate(recs){
  let total = 0;

  for (let i = 0; i < recs.length; i++){
    const rec = recs[i];
    total += calculateArea(rec);

    const intersectionRecs = getIntersectingRectangles(i, recs, rec);

    total -= calculate(intersectionRecs);
  }

  return total;
}

module.exports = calculate;
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
    Math.max(rec[0], otherRec[0]),
    Math.max(rec[1], otherRec[1]),
    Math.min(rec[2], otherRec[2]),
    Math.min(rec[3], otherRec[3])
  ];
  return intersectionRec;
}

function calculateIntersectionInfo(rec, otherRec) {
  let intersectionRec = getIntersectionRec(rec, otherRec);
  let intersectionArea = Math.max(0, calculateArea(intersectionRec));
  return {intersectionArea, intersectionRec};
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

    let area = calculateArea(rec);
    total += area;
    let intersectionRecs = recs.slice(i+1).map(otherRec => calculateIntersectionInfo(rec, otherRec))
      .filter(intersectionInfo => intersectionInfo.intersectionArea != 0)
      .map(intersectionInfo => intersectionInfo.intersectionRec);
    total -= calculate(intersectionRecs);

  }

  return total;
}

module.exports = calculate;
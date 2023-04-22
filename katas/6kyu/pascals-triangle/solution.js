function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  if (n == 1) return [1];
  let prevArrays = pascalsTriangle(n-1);
  let prevArray = prevArrays.slice(prevArrays.length - (n - 1));
  let newArray = [1];
  for (let i = 0; i < n-2; i++) {
    newArray.push(prevArray[i] + prevArray[i+1]);
  }
  newArray.push(1);
  return [...prevArrays, ...newArray];
}

module.exports = pascalsTriangle;
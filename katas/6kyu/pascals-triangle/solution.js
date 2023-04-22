function calculateNextRow(lastRow) {
  let nextRow = [];
  for (let i = 0; i < lastRow.length - 1; i++) {
    nextRow.push(lastRow[i] + lastRow[i + 1]);
  }
  return [1, ...nextRow, 1];
}

function pascalsTriangle(n) {
  if (n === 1) return [1];
  let previousTriangle = pascalsTriangle(n - 1);
  let lastRow = previousTriangle.slice(previousTriangle.length - (n - 1));

  return [...previousTriangle, ...(calculateNextRow(lastRow))];
}

module.exports = pascalsTriangle;
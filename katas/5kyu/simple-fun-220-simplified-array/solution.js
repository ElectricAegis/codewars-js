function isPrime(n) {
  switch (true) {
    case n <= 1: // Check if n=1 or n=0
      return false;
    case n === 2 || n === 3: // Check if n=2 or n=
      return true;
    case n % 2 === 0 || n % 3 === 0: // Check whether n is divisible by 2 or 3
      return false;
    default: {
      // Check from 5 to square root of n
      // Iterate i by (i+6)
      for (let i = 5; i <= Math.sqrt(n); i = i + 6)
        if (n % i === 0 || n % (i + 2) === 0)
          return false;

      return true;
    }
  }
}

function compareArrays(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

function collapseArray(arr) {
  let iterator = 0;
  let collapsedArray = [];
  let prevPrimeState = null;
  while (iterator !== arr.length) {
    let currentPrimeState = isPrime(arr[iterator]);
    if (currentPrimeState === prevPrimeState) {
      collapsedArray[collapsedArray.length - 1] += arr[iterator];
    } else {
      collapsedArray.push(arr[iterator]);
      prevPrimeState = currentPrimeState;
    }
    iterator++;
  }

  return collapsedArray;
}

function simplifiedArray(arr) {
  let collapsedArray = collapseArray(arr);
  if (compareArrays(arr, collapsedArray)) {
    return collapsedArray;
  } else {
    return simplifiedArray(collapsedArray);
  }

}

module.exports = simplifiedArray;
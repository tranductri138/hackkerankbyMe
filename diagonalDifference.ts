const arr2 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr: number[][]): number {
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) d1 += arr[i][j];
      // 00 11 22
      if (i + j === arr.length - 1) d2 += arr[i][j];
      // 02 11 20
    }
  }
  return Math.abs(d1 - d2);
}

const a = diagonalDifference(arr2);
console.log(a);

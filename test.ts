function reverseArray(a: number[]): number[] {
  const arrb: number[] = [];
  for (let i = a.length - 1; i >= 0; i--) {
    arrb.push(a[i]);
  }
  return arrb;
}

// const a = [1, 4, 3, 2];
// console.log(reverseArray(a));

const arr1 = [
  [1, 0, 1, 2],
  [1, 0, 1, 2],
  [1, 0, 1, 2],
  [1, 0, 1, 2],
];

function hourglassSum(arr: number[][]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let arrH = arr[i];
    for (let j = 0; j < arrH.length; j++) {
      console.log("cube[" + i + "][" + j + "] = " + arrH[j]);
    }
  }
  return sum;
}

console.log(hourglassSum(arr1));

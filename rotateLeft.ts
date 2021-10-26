function rotateLeft(d: number, arr: number[]): number[] {
  let count = 0;
  while (count < d) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    count++;
  }
  return arr;
}

const arr5 = [1, 2, 3, 4, 5];
console.log(rotateLeft(4, arr5));

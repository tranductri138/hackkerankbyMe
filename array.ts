function rotateLeft(d: number, arr: number[]): number[] {
  for (let i = 0; i < 2; i++) {
    for (let j = i; j < 2; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(1, arr));
function rotateLeft1(d: number, arr: number[]): number[] {
  for (let i = 0; i < 5; i++) {
    for (let j = i; j < i; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      console.log("is here");
    }
  }
  return arr;
}

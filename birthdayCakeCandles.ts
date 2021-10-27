function birthdayCakeCandles(candles: number[]): number {
  let max = candles[0];
  let sum = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) max = candles[i];
  }

  console.log(max);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == max) sum++;
  }
  return sum;
}
const arr10 = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

console.log(birthdayCakeCandles(arr10));

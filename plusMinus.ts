function plusMinus(arr: number[]): void {
  let countPos = 0;
  let countMinus = 0;
  let countZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) countZeros++;
    else if (arr[i] < 0) countMinus++;
    else if (arr[i] > 0) countPos++;
  }
  console.log((countPos / arr.length).toFixed(6));
  console.log((countMinus / arr.length).toFixed(6));
  console.log((countZeros / arr.length).toFixed(6));
}

const arr4 = [-4, 3, -9, 0, 4, 1];

plusMinus(arr4);

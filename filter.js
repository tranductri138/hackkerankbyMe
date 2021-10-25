let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ham fillter se tra cho 1 array moi

let fillter = arr.filter((item, index) => {
  console.log(index, " ---- ", item);
  return item && item > 5;
});

console.log(fillter);

let fillter2 = arr.filter((index, item) => {
  return index;
});

console.log(fillter2);

const nnode = new Node();

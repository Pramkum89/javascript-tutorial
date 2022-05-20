// flatMap

const numbers = [1, 2, 3, 4, [5, 6], 7];
console.log(
  numbers.flat().map((num) => {
    return num * 10;
  })
);

const numbers1 = [1, 2, 3, 4, [5, 6], 7];
console.log(
  numbers1.flatMap((num1) => {
    return num1 * 10;
  })
);

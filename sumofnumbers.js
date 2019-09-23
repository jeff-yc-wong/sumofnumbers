const testData = [1, 2, 3, 4];

function sumFor(data) {
  let sum = 0;
  for (const num of data) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testData));

function sumWhile(data) {
  let sum = 0;
  let count = 0;
  while (count < data.length) {
    sum += data[count];
    count++;
  }
  return sum;
}

console.log(sumWhile(testData));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

console.log(sumRecursion(testData));

function sumTheSimpleWay(data) {
  return _.reduce(data, (memo, value) => memo + value, 0);
}

console.log(sumTheSimpleWay(testData));

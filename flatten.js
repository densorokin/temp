let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, ["pp"]],
];

const flatten = (arr) => {
  let flatMap = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      flatMap = flatMap.concat(flatten(el));
    } else {
      flatMap.push(el);
    }
  });

  return flatMap;
};

console.log("--flatten", flatten(data));

// const flattened = arr.reduce((acc, value) => acc.concat(value), [])

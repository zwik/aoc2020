const part1 = require('./part1');

module.exports = (treeMap, right, down) => {
  const numberOfTrees = [0, 0, 0, 0, 0];

  right.forEach((_, index) => {
    const totalTrees = part1(treeMap, right[index], down[index]);
    numberOfTrees[index] = totalTrees;
  });

  return numberOfTrees.reduce((a, b) => a * b, 1);
};

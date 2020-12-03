module.exports = (treeMap, right, down) => {
  let numberOfTrees = 0;
  let x = 0;
  let y = 0;

  while (y < treeMap.length) {
    const adjustedX = x % treeMap[0].length;
    const tile = treeMap[y][adjustedX];

    if (tile === '#') {
      numberOfTrees += 1;
    }

    x += right;
    y += down;
  }

  return numberOfTrees;
};

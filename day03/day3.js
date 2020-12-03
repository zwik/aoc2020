const fs = require('fs');
const path = require('path');
const consola = require('consola');

const part1 = require('./part1');
const part2 = require('./part2');

const values = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((x) => x.split(''));

consola.success(`The correct answer for part 1 is: ${part1(values, 3, 1)}`);
consola.success(`The correct answer for part 2 is: ${part2(values, [1, 3, 5, 7, 1], [1, 1, 1, 1, 2])}`);

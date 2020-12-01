const fs = require('fs');
const path = require('path');
const consola = require('consola');

const part1 = require('./part1');
const part2 = require('./part2');

const values = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((value) => Number(value));

consola.success(`The correct answer is: ${part1(values)}`);
consola.success(`The correct answer is: ${part2(values)}`);

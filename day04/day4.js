const fs = require('fs');
const path = require('path');
const consola = require('consola');

const part1 = require('./part1');
const part2 = require('./part2');

const values = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split('\n\n');
const parsedValues = values.map((passport) => passport.split('\n')
  .join(' ')
  .split(/\s+/)
  .map((value) => value.split(':'))
  .reduce((accum, [key, value]) => ({ ...accum, [key]: value }), {}));

consola.success(`The correct answer for part 1 is: ${part1(parsedValues).length}`);
consola.success(`The correct answer for part 2 is: ${part2(part1(parsedValues)).length}`);

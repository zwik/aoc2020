const fs = require('fs');
const path = require('path');

const part1 = require('./part1');
const part2 = require('./part2');

describe('day 1', () => {
  describe('part 1', () => {
    it('should return the correct value with test values', () => {
      const input = [1721, 979, 366, 299, 675, 1456];
      expect(part1(input)).toBe(514579);
    });

    it('should return the correct values with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((value) => Number(value));
      expect(part1(input)).toBe(651651);
    });
  });

  describe('part 2', () => {
    it('should return the correct value with test values', () => {
      const input = [1721, 979, 366, 299, 675, 1456];
      expect(part2(input)).toBe(241861950);
    });

    it('should return the correct values with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((value) => Number(value));
      expect(part2(input)).toBe(214486272);
    });
  });
});

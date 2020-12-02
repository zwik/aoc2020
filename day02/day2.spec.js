const fs = require('fs');
const path = require('path');

const part1 = require('./part1');
const part2 = require('./part2');

describe('day 1', () => {
  describe('part 1', () => {
    it('should return the correct value with test values', () => {
      const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
      expect(part1(input)).toBe(2);
    });

    it('should return the correct values with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/);
      expect(part1(input)).toBe(418);
    });
  });

  describe('part 2', () => {
    it('should return the correct value with test values', () => {
      const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
      expect(part2(input)).toBe(1);
    });

    it('should return the correct values with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/);
      expect(part2(input)).toBe(616);
    });
  });
});

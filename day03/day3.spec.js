const fs = require('fs');
const path = require('path');

const part1 = require('./part1');
const part2 = require('./part2');

describe('day 3', () => {
  describe('part 1', () => {
    it('should return the correct value with test values', () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
      const parsedInput = input.split(/\r?\n/).map((x) => x.split(''));
      expect(part1(parsedInput, 3, 1)).toBe(7);
    });

    it('should return the correct value with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((x) => x.split(''));
      expect(part1(input, 3, 1)).toBe(187);
    });
  });

  describe('part 2', () => {
    it('should return the correct value with test values', () => {
      const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
      const parsedInput = input.split(/\r?\n/).map((x) => x.split(''));
      expect(part2(parsedInput, [1, 3, 5, 7, 1], [1, 1, 1, 1, 2])).toBe(336);
    });

    it('should return the correct values with actual values', () => {
      const input = fs.readFileSync(path.join(__dirname, './input.txt'), { encoding: 'utf-8' }).split(/\r?\n/).map((x) => x.split(''));
      expect(part2(input, [1, 3, 5, 7, 1], [1, 1, 1, 1, 2])).toBe(4723283400);
    });
  });
});

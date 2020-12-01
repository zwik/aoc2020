module.exports = (values) => {
  const TARGET_VALUE = 2020;
  let abort = false;
  let calculatedValue = 0;

  // I use `every` instead of `forEach` because it returns a boolean value to escape from the loop.
  values.every((val1) => {
    values.every((val2) => {
      values.every((val3) => {
        if (val1 + val2 + val3 === TARGET_VALUE) {
          calculatedValue = val1 * val2 * val3;
          abort = true;
        }

        return !abort;
      });

      return !abort;
    });

    return !abort;
  });

  return calculatedValue;
};

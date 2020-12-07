const validateRequiredFields = (fields) => (value) => {
  const keys = Object.keys(value);

  return fields.every((field) => keys.includes(field));
};

const validateYearField = (field, min, max) => (value) => {
  const year = Number(value[field]);
  return value[field].length === 4 && year >= min && year <= max;
};

const validateHeightField = (field, min, max) => (value) => {
  const height = parseInt(value[field], 10);
  const unit = value[field].substring(value[field].length - 2);

  return height >= min[unit] && height <= max[unit];
};

const validateHexColorField = (field) => (value) => /#[0-9a-f]/.test(value[field]);

const validateAllowedColors = (field, allowedList) => (v) => allowedList.includes(v[field]);

const validateNumericStringField = (field, length) => (value) => new RegExp(`^[0-9]{${length}}$`).test(value[field]);

const combineValidators = (...validators) => (v) => validators.reduce((a, b) => a && b(v), true);

module.exports = (passwords) => {
  const validPassports = passwords.filter(combineValidators(
    validateRequiredFields(['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']),
    validateYearField('byr', 1920, 2002),
    validateYearField('iyr', 2010, 2020),
    validateYearField('eyr', 2020, 2030),
    validateHeightField('hgt', { cm: 150, in: 59 }, { cm: 193, in: 76 }),
    validateHexColorField('hcl'),
    validateAllowedColors('ecl', ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']),
    validateNumericStringField('pid', 9),
  ));

  return validPassports;
};

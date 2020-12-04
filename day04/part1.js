module.exports = (passwords) => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const validPasswords = [];

  passwords.forEach((password) => {
    const keys = Object.keys(password);

    if (requiredFields.every((field) => keys.includes(field))) {
      validPasswords.push(password);
    }
  });

  return validPasswords;
};

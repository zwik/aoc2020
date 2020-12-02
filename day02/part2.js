module.exports = (values) => values.reduce((validPasswords, currentPassword) => {
  const firstPosition = Number(currentPassword.slice(0, currentPassword.indexOf('-')));
  const secondPosition = Number(currentPassword.substr(currentPassword.indexOf('-') + 1, currentPassword.indexOf(' ') - 2));
  const characterToFind = currentPassword.substr(currentPassword.indexOf(' ') + 1, 1);
  const hash = currentPassword.slice(currentPassword.indexOf(': ') + 2, currentPassword.length);

  const isAtFirstPosition = hash[firstPosition - 1] === characterToFind;
  const isAtSecondPosition = hash[secondPosition - 1] === characterToFind;

  // Count Boolean values because airbnb doesn't allow ^ for XOR.
  if (isAtFirstPosition + isAtSecondPosition === 1) {
    return validPasswords + 1;
  }

  return validPasswords;
}, 0);

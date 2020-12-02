module.exports = (values) => values.reduce((validPasswords, currentPassword) => {
  const lowerBound = Number(currentPassword.slice(0, currentPassword.indexOf('-')));
  const upperBound = Number(currentPassword.substr(currentPassword.indexOf('-') + 1, currentPassword.indexOf(' ') - 2));
  const characterToFind = currentPassword.substr(currentPassword.indexOf(' ') + 1, 1);
  const hash = currentPassword.slice(currentPassword.indexOf(': ') + 2, currentPassword.length).split('');

  const characterMatches = hash.filter((char) => char === characterToFind).length;

  if (characterMatches >= lowerBound && characterMatches <= upperBound) {
    return validPasswords + 1;
  }

  return validPasswords;
}, 0);

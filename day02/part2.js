module.exports = (values) => values.reduce((validPasswords, currentPassword) => {
  const regexPattern = /(\d+)-(\d+)\s([a-z]):\s([a-z]*)/g;
  const matchGroups = regexPattern.exec(currentPassword);

  const firstPosition = Number(matchGroups[1]);
  const secondPosition = Number(matchGroups[2]);
  const characterToFind = matchGroups[3];
  const hash = matchGroups[4].split('');

  const isAtFirstPosition = hash[firstPosition - 1] === characterToFind;
  const isAtSecondPosition = hash[secondPosition - 1] === characterToFind;

  // Count Boolean values because airbnb doesn't allow ^ for XOR.
  if (isAtFirstPosition + isAtSecondPosition === 1) {
    return validPasswords + 1;
  }

  return validPasswords;
}, 0);

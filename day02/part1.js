module.exports = (values) => values.reduce((validPasswords, currentPassword) => {
  const regexPattern = /(\d+)-(\d+)\s([a-z]):\s([a-z]*)/g;
  const matchGroups = regexPattern.exec(currentPassword);

  const lowerBound = Number(matchGroups[1]);
  const upperBound = Number(matchGroups[2]);
  const characterToFind = matchGroups[3];
  const hash = matchGroups[4].split('');

  const characterMatches = hash.filter((char) => char === characterToFind).length;

  if (characterMatches >= lowerBound && characterMatches <= upperBound) {
    return validPasswords + 1;
  }

  return validPasswords;
}, 0);

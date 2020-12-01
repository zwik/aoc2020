module.exports = {
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};

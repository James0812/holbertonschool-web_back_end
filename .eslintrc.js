module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never' }],
    'comma-dangle': ['error', 'always-multiline'],
  },
};

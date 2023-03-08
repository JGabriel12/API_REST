module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};

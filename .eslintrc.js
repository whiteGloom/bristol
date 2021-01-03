module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'extends': ['eslint-config-wgl-main', 'plugin:@typescript-eslint/recommended'],
  'env': {
    'browser': true,
    'jasmine': true
  }
};

/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: 'eslint-config-ns',
  globals: {
    exports: true,
    __dirname: true,
  },
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
}

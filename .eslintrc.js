// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['standard'],
  // required to lint *.vue files
  plugins: ['react'],
  // add your custom rules here
  rules: {
    'react/jsx-uses-vars': [2],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn'
  }
}

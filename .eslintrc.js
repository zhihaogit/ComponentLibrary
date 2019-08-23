module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-indent': [2, 4],
    'vue/html-self-closing': 1,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-empty": 2,
    "dot-location": [2, "object"],
    "array-callback-return": 2,
    "curly": 2,
    "eqeqeq": 2,
    "no-redeclare": 2,
    "no-delete-var": 2,
    "no-undef": 2,
    "no-unused-vars": 1,
    "comma-dangle": ["error", "always"],
    "comma-spacing": 1,
    "comma-style": 2,
    "semi": 1,
    "indent": [2, 4],
    "object-curly-newline": 0,
    "no-extra-semi": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 1,
    "key-spacing": 2,
    "keyword-spacing": 2,
    "space-before-blocks": 2,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "operator-linebreak": 2,
    "quotes": [2, "single"],
    "no-unneeded-ternary": 2,
    "no-const-assign": 2,
    "no-this-before-super": 2,
    "camelcase": 0,
    "no-param-reassign": 0,
    "array-bracket-spacing": 0,
    "no-shadow": 0,
    "max-len": 0,
    "no-mixed-operators": 0,
    "func-names": 0,
    "global-require": 0,
    "guard-for-in": 0,
    "no-restricted-syntax": 0,
    "no-useless-concat": 0,
    "no-useless-escape": 0,
    "no-underscore-dangle": 0,
    "import/extensions": 0,
    "no-plusplus": 0,
    "no-return-assign": 0,
    "import/first": 0,
    "no-sequences": 0,
    "radix": 0,
    "no-restricted-globals": 0,
    "no-nested-ternary": 0,
    "import/no-dynamic-require": 0,
    "consistent-return": 0,
    "prefer-const": 0,
    "one-var": 0,
    "no-lonely-if": 0,
    "no-new": 0,
    "no-empty-pattern": 0,
    "no-cond-assign": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-duplicates": 0,
    "no-unreachable": 0,
    "no-new-object": 0,
    "prefer-destructuring": 0,
    "import/no-named-as-default-member": 0,
    "no-bitwise": 0,
    "no-irregular-whitespace": 0,
    "no-unused-expressions": 0,
    "import/prefer-default-export": 0,
    "no-self-assign": 0,
    "no-self-compare": 0,
    "prefer-promise-reject-errors": 0,
    "arrow-parens": 0,
    "no-case-declarations": 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
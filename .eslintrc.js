module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  env: {
    'jest/globals': true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.story.ts', '**/*.story.tsx', '**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    'prettier/prettier': ['error'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', 'tsx'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

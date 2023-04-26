module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    PCore: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic'
          }
        ]
      ]
    },
    project: './tsconfig.json'
  },
  plugins: ['jsdoc', 'react', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'off',
      {
        additionalHooks: 'useAfterInitialEffect'
      }
    ],
    'prettier/prettier': 'error',
    semi: 'off',
    'react/prop-types': 'off',
    'no-duplicate-imports': 'error',
    'no-duplicate-string': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'no-case-declarations': 'error',
    'no-debugger': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/valid-types': 'error',
    'no-underscore-dangle': 'off',
    'prefer-promise-reject-errors': 'error',
    'no-param-reassign': 'off',
    'func-names': 'error',
    eqeqeq: 'error',
    'no-tabs': 'error',
    'no-plusplus': 'error',
    'no-use-before-define': 'error',
    'no-loop-func': 'error',
    'no-shadow': 'error',
    'no-eval': 'error',
    camelcase: 'error',
    'consistent-return': 'off',
    'default-case': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'guard-for-in': 'error',
    'no-return-assign': 'error',
    'no-prototype-builtins': 'error',
    'prefer-destructuring': 'error',
    'max-len': [
      'error',
      {
        code: 180
      }
    ],
    'no-mixed-operators': 'error',
    'no-var': 'error',
    'global-require': 'error',
    'no-useless-constructor': 'error',
    'class-methods-use-this': 'error',
    'import/no-unresolved': 'error',
    'import/no-mutable-exports': 'error',
    'import/prefer-default-export': 'error',
    'import/extensions': 'error',
    'import/order': 'error',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-nested-template-literals': 'off'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false
      },
      plugins: ['jsdoc', 'prettier', 'react', '@typescript-eslint'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Omit: "Please use the 'OmitStrict' type from 'src/types/' instead.",
              object: false,
              Function: false
            },
            extendDefaults: true
          }
        ],
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};

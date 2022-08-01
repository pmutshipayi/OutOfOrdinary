const [OFF, ERROR] = [0, 2];

module.exports = {
  root: true,
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react-native-a11y/all',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  plugins: ['react', 'react-native'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
        map: [
          ['@', './src'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@constants', './src/constants'],
          ['@navigation', './src/navigation'],
          ['@screens', './src/screens'],
          ['@theme', './src/theme'],
          ['@types', './src/types'],
          ['@hooks', './src/hooks'],
        ],
      },
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-named-as-default': OFF,
    'react-native/no-inline-styles': OFF,
    'import/namespace': OFF,
    '@typescript-eslint/no-unused-vars': ['error', {ignoreRestSiblings: true}],
    'import/order': [
      ERROR,
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          'parent',
          ['index', 'sibling'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
};

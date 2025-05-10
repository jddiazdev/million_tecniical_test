module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-navigation|react-native|other-package-to-transform)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './node_modules/react-native/jest/setup.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};

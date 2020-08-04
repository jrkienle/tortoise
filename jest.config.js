module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: './test-results/coverage',
  coverageReporters: ['text'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  reporters: ['default'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./setupTests.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.test\\.tsx?$',
};

module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  transformIgnorePatterns: [],
  collectCoverageFrom: [
    'js/**/*.{js,ts,tsx}',
    '!**/node_modules/**',
    '!**/libs/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  forceCoverageMatch: ['**/*.(spec|test).(js|ts|tsx)'],
  testEnvironment: 'jsdom',
};

const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupFiles": [
      "<rootDir>/test/shim.js",
      "<rootDir>/test/testSetup.js"
    ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
module.exports = {
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  },
  testEnvironment: "jsdom"
};

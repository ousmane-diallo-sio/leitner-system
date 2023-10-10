module.exports = {
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom"
};

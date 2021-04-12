module.exports = {
  "moduleNameMapper": {
    "\\.svg": "<rootDir>/__mocks__/svgrMock.tsx"
  },
  "transform": {
    ".(ts|tsx|js|jsx)$": require.resolve('babel-jest')
  }
}

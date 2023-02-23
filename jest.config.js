module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/src/__tests__/**/*.spec.ts"
  ],
};
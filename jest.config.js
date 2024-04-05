module.exports = {
  // moduleNameMapper: {
  //   '@core/(.*)': '<rootDir>/src/app/core/$1',
  //   '@shared/(.*)': '<rootDir>/src/app/shared/$1',
  //   '@product/(.*)': '<rootDir>/src/app/product/$1',
  //   '@cart/(.*)': '<rootDir>/src/app/cart/$1',
  // },
  // transform: {
  //   "^.+\\.[t|j]s?$": "babel-jest"
  // },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  collectCoverage:true,
  "collectCoverageFrom": [
    "!src/**/*.ts",
    "src/**/*.service.ts",
    "src/**/*.component.ts",
    "src/**/*.directive.ts",
    "src/**/*.actions.ts",
    "src/**/*.reducer.ts",
    "src/**/*.effects.ts",
    "src/**/*.pipe.ts",
    "src/**/*.validator.ts",
    "src/**/*.guard.ts"
  ],
};


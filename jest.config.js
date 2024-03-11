console.log("------------------ I am called")
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
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts']
};


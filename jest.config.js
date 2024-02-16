module.exports = {  
    "testMatch": [
        "<rootDir>/src/**/*spec.ts"
    ],
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": 
        "<rootDir>/setupJest.ts"
      ,
      "coveragePathIgnorePatterns": [
        "/node_modules/",
        "src/app/mock"
      ],
      "coverageReporters": [
        "html"
      ],
      "collectCoverageFrom": [
        "src/**/*.service.ts",
        "src/**/*.component.ts",
        "src/**/*.actions.ts",
        "src/**/*.reducer.ts",
        "src/**/*.effects.ts",
        "src/**/*.handler.ts",
        "src/**/*.pipe.ts",
        "src/**/*.validator.ts",
        "src/**/*.guard.ts"
      ]
}
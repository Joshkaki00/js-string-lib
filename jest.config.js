module.exports = {
    // The root directory that Jest should scan for tests and modules
    rootDir: '.',
    
    // The test environment that will be used for testing
    testEnvironment: 'node',
    
    // The glob patterns Jest uses to detect test files
    testMatch: [
      '**/test/**/*.test.{js,ts}'
    ],
    
    // An array of regexp pattern strings that are matched against all test paths
    // matched tests are skipped
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/'
    ],
    
    // Indicates whether each individual test should be reported during the run
    verbose: true,
    
    // Indicates whether the coverage information should be collected
    collectCoverage: false,
    
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/__tests__/'
    ],
    
    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: [
      'json',
      'text',
      'lcov',
      'clover'
    ],
    
    // The threshold enforcement for coverage results
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    
    // A transformer is needed to process non-JS files
    transform: {
      '^.+\\.(js|ts)$': 'babel-jest'
    },

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
      "src/**/*.{js,ts}",
      "!src/**/*.d.ts",
      "!src/**/index.{js,ts}"
    ],

    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    watchPathIgnorePatterns: [
      "/node_modules/",
      "/dist/"
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
      "js",
      "ts",
      "json"
    ],

    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
};
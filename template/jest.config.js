module.exports = {
  "globals": {
    "ts-jest": {
      "babelConfig": true
    }
  },
  "setupFilesAfterEnv": [
    "<rootDir>/config/jest/setup.js"
  ],
  "testURL": "http://localhost/",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "<rootDir>/src/**/*.test.js?(x)",
    "<rootDir>/src/**/*.test.ts?(x)"
  ],
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  }
};
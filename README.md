# Automator-3030

## Installation
```bash
npm install
```

## Running the UI
```bash
npm start
```

## Running a test in all browsers
```bash
testcafe all tests/test.js
```

## Running a test in a specific browser
```bash
testcafe chrome tests/test.js
```

## Piping results to a file
```bash
testcafe chrome tests/test.js > results.txt
```

## Running on a local project
_this assumes your project's start cmd is **npm run server**_  
```bash
testcafe chrome tests/test.js --app "npm run server" > results.txt
```

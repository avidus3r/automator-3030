# Automator-3030

## Installation
``` sh
npm install
```

## Running the UI
``` sh
npm start
```

## Running a test in all browsers
``` sh
testcafe all tests/test.js
```

## Running a test in a specific browser
``` sh
testcafe chrome tests/test.js
```

## Piping results to a file
``` sh
testcafe chrome tests/test.js > results.txt
```

## Running on a local project
_this assumes your project's start cmd is **npm run server**_  
``` sh
testcafe chrome tests/test.js --app "npm run server" > results.txt
```

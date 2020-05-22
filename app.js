// Load text file and convert to string
const fs = require('fs');

// App tests for Parentheses check if equal number of opening and closing parens
// have been used in hardcoded 'string' or imported 'text' file containing
// LISP code
// 
// See app.test.js for tests
// Run tests with jest by installing the node modules with npm install 
// and then running test with one of the following commands
// $ cd to this directory 
// $ npm run test

// Parentheses check for equal number of opening and closing parens
const checkParens = (string) => {
  return !string.split("").reduce((a, c) => {
    if (c === "(") return ++a
    if (c === ")") return --a
    return a
  }, 0);
}

// Hardcoded String
const testStringParens = string => {
  return checkParens(string);
}

// File imported
const testFileParens = file => {
  let test = fs.readFileSync(file).toString();
  return checkParens(test);
}


exports.string = testStringParens;
exports.file = testFileParens;

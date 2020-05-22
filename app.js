// Load text file and convert to string
const fs = require('fs');
const code = fs.readFileSync('code.lisp.txt').toString();

//
// Run App: 
// $ cd to this directory 
// $ node app.js 
//
// Run tests with jest with one of the following commands
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


console.log(checkParens(code));

module.exports = checkParens;

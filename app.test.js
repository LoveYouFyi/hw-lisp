// Test with Jest
const testStringParens = require("./app");
const testFileParens = require("./app");

//
// File imports testing of Lisp code
//

// Test parens true for file code.lisp.txt
test("Test LISP code parens", () => {
  expect(testFileParens.file("./code.lisp.txt")).toBe(true);
});

// Test parens false for file code.lisp2.txt
test("Test LISP code parens", () => {
  expect(testFileParens.file("./code.lisp2.txt")).toBe(false);
});

//
// Hard-coded strings testing
//

// test true
test("Test string parens", () => {
  expect(testStringParens.string("((()))")).toBe(true);
});

//// test true
test("Test string parens", () => {
  expect(testStringParens.string("( ( (()code check()) ) )")).toBe(true);
});

// test false
test("Test string parens", () => {
  expect(testStringParens.string("( ( ( ( ) (( ) ) )")).toBe(false);
});

// test false 
test("Test string parens", () => {
  expect(testStringParens.string("( ( code ( ( ) (let this( ) be good ) )")).toBe(false);
});

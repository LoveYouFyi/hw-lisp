// Test with Jest
const testStringParens = require("./app");
//const testFileParens = require("./app");

//
// Lisp code testing from file import
//
// Test parens true
//test("Text file with lisp code", () => {
  //expect(testFileParens('code.lisp.txt').toBe(true));
//});


//
// Initial testing with simple hard-coded strings
//

// Test parens true
test("Parentheses check for equal number opening and closing", () => {
  expect(testStringParens("((()))")).toBe(true);
});

// Test parens true
test("Parentheses check for equal number opening and closing", () => {
  expect(testStringParens("( ( (()code check()) ) )")).toBe(true);
});

// Test parens false
test("Parentheses check for equal number opening and closing", () => {
  expect(testStringParens("( ( ( ( ) (( ) ) )")).toBe(false);
});

// Test parens false 
test("Parentheses check for equal number opening and closing", () => {
  expect(testStringParens("( ( code ( ( ) (let this( ) be good ) )")).toBe(false);
});


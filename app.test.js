// Test with Jest
const checkParens = require("./app");

// Test parens true
test("Parentheses check for equal number of opening and closing parens", () => {
  expect(checkParens("((()))")).toBe(true);
});

// Test parens true
test("Parentheses check for equal number of opening and closing parens", () => {
  expect(checkParens("( ( (()code check()) ) )")).toBe(true);
});

// Test parens false
test("Parentheses check for equal number of opening and closing parens", () => {
  expect(checkParens("( ( ( ( ) (( ) ) )")).toBe(false);
});

// Test parens false 
test("Parentheses check for equal number of opening and closing parens", () => {
  expect(checkParens("( ( code ( ( ) (let this( ) be good ) )")).toBe(false);
});


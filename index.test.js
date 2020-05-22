// Test with Jest
const checkParens = require("./index");

test("Parentheses check for equal number of opening and closing parens", () => {
    expect(checkParens("((()))")).toBe(true);
});


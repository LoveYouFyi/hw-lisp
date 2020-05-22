const checkParens = (string) => {
  return !string.split("").reduce((a, c) => {
    if (c === "(") return ++a
    if (c === ")") return --a
    return a
  }, 0);
}

console.log(checkParens("( ( ( ( ) (( ) ) )"));
console.log(checkParens("( ( ) )"));
console.log(checkParens("( ( (()()) ) )"));

module.exports = checkParens

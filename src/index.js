module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};
  for (let opn_brack of bracketsConfig) {
    OPEN_BRACKETS.push(opn_brack[0]);
  }
  for (let brack_pair of bracketsConfig) {
    BRACKETS_PAIR[[brack_pair[1]]] = brack_pair[0];
  }
  let stack = [];
  for (i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if ( BRACKETS_PAIR[currentSymbol] === topElement && stack.length > 0 ) {
      stack.pop();
    } else {
      stack.push(currentSymbol);
    }
  }
  return stack.length === 0;
}

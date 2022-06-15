// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.



var evalRPN = function(tokens) {
  let stack = [];
  // let nums = '0123456789'

  for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '/' && tokens[i] !== '*') {
          stack.push(Number(tokens[i]));
      } else if (tokens[i] === '+') {
          const top = stack.pop();
          const second = stack.pop();
          const newNum = top + second;
          stack.push(newNum)
      } else if (tokens[i] === '*') {
          const top = stack.pop();
          const second = stack.pop();
          const newNum = top * second;
          stack.push(newNum)
      } else if (tokens[i] === '-') {
          const top = stack.pop();
          const second = stack.pop();
          const newNum = second - top;
          stack.push(newNum)
      } else if (tokens[i] === '/') {
          const top = stack.pop();
          const second = stack.pop();
          const newNum = Math.trunc(second / top);
          stack.push(newNum)
      }
  }
  return stack[stack.length - 1]
};
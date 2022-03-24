var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      switch (s[i]){
          case '(':
              stack.push(')');
              break;
          case '[':
              stack.push(']');
              break;
          case '{':
              stack.push('}');
              break;
          default:
              if (s[i] !== stack.pop()) {
                  return false;
              }
      }

  }
  if (stack.length === 0) {
  return true;
}
return false;
};
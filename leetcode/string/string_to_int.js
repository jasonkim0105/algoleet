var myAtoi = function(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
      if (parseInt(s[i])) {
          arr.push(parseInt(s[i]))
      }
      if (s[i] === '-') arr.push('-')
      if (s[i] === '+') arr.push('+')
  }
  let num = arr.join('')
  if (num <= (-2^31) || num >= (2^31) - 1) return 0
  return num

};
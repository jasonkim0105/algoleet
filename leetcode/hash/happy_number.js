// var isHappy = function(n) {
//   if (n === 1) {
//       return true;
//   }
//   if (n.toString().split('').length === 1 && n !== 1) {
//     return false;
//   }

//   let nString = n.toString();
//   let newNumsArray = nString.split('')
//   let newNums = newNumsArray.map(num => parseInt(num))
//   let sum = 0;
//   newNums.forEach(num => sum += (num * num))
//   // console.log()
//   return isHappy(sum)
// };


// let obj = {};
// var isHappy = function(n) {
//     if (!obj[n]){
//         obj[n] = 1;
//     } else {
//         obj[n]++
//     }
//     if (n === 1 || obj[n]) {
//       return true;
//   }
//   if (n.toString().split('').length === 1 && n !== 1 && !obj[n]) {
//     return false;
//   }


//   let nString = n.toString();
//   let newNumsArray = nString.split('')
//   let newNums = newNumsArray.map(num => parseInt(num))
//   let sum = 0;
//   newNums.forEach(num => sum += (num * num))
//   return isHappy(sum)
// };

n = 19;
console.log(isHappy(n))
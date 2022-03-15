// Write a function that takes an array of characters and reverses the letters in place. ↴

function reverseString(array) {
  // let back = array[array.length - 1];

  let front = 0;
  let back = array.length - 1;
  while (front < back) {
    let temp = array[back];
    array[back] = array[front];
    array[front] = temp;
    front++;
    back--;
  }
  return array;
}

let array = ['j', 'a', 's', 'o', 'n']
//            0    1    2    3    4
console.log(reverseString(array))


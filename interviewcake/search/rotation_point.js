// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

//   const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

// JavaScript
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

// function rotationPoint(array) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let mid = Math.floor(array.length/2);
//   if (array.length === 0) return 'no rotation point';
//   // return alphabet.indexOf(array[mid+1][0])
//   if (alphabet.indexOf(array[mid][0]) < alphabet.indexOf(array[mid+1][0])) {
//     return rotationPoint(array.slice(0, mid))
//   } else if (alphabet.indexOf(array[mid][0]) > alphabet.indexOf(array[mid + 1][0])) {
//     return rotationPoint(array.slice(mid + 1, array.length))
//   }
// }
function rotationPoint(array) {
  let firstWord = array[0];
  let floorIdx = 0;
  let ceilingIdx = array.length - 1

  while (floorIdx < ceilingIdx) {
    let mid = Math.floor(array.length/2);
    if (array[mid] >= firstWord) {
      floorIdx = mid //go right
    } else {
      ceilingIdx = mid//go left
    }
    if (floorIdx + 1 === ceilingIdx) {
      break;
    }
  }
  return ceilingIdx;
}
  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
console.log(rotationPoint(words))
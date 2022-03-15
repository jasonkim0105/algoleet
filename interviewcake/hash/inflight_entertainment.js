// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

// function inflightEntertainment(flightLength, movieLengths){
//   for (let i = 0; i < movieLengths.length; i++) {
//     for (let j = 1; j < movieLengths.length; j++) {
//       let first = movieLengths[i];
//       let second = movieLengths[j];
//       if (first + second === flightLength) return true
//     }
//   }
//   return false;
// }
//o(n^2);

function inflightEntertainment(flightLength, movieLengths){
  let movieSet = new Set()
  for (let i = 0; i < movieLengths.length; i++) {
    let firstMovie = movieLengths[i];

    let secondMovie = flightLength - firstMovie;
    if (movieSet.has(secondMovie)) return true;
    movieSet.add(firstMovie)
    console.log(movieSet)
  }
  return false

}

let flight = 50;
let movie = [1, 24, 27, 30];
console.log(inflightEntertainment(flight, movie))
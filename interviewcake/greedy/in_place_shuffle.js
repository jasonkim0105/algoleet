// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function getRandom(floor, ceiling){
  return Math.floor(Math.random() * (ceiling -floor + 1) + floor);
}

function shuffle(array) {
  if (array.length <= 1) return;

  for (let indexWeAreChoosingFor = 0;
    indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {
      const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

      if (randomChoiceIndex !== indexWeAreChoosingFor) {
        const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
      }
    }

}

let arrayz = [1, 3, 2, 5]
console.log(shuffle(arrayz))
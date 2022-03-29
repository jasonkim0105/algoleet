//Compress the string:
//Input = AAABBBCCD
//Output = 3A3B2CD

//A
//10A

function challenge(string) {
	let hash = {};    //{A: 3, B: 3, C: 2, D: 1}
  let answer = '';	//''
  for (let i = 0; i < string.length; i++) { 	//i = 3
  	if (!hash[string]){					//hash[B]
    	hash[string] = 1					//
    } else {
    	hash[string]++;
    }
  }

  for (let char of hash) {
  	if (hash[char] === 1) {
    	answer += char
    } else {
    	answer += hash[char] 				//3A3B2CD
    	answer += char
    }

  }
  return answer
}

//Find the unique intersection of two arrays:
//Input = [4,9,5] & [9,4,9,8,4]
//Output = [9,4]

function uniqueIntersection(arr1, arr2) {
	let set = new Set();
  let longer;
  let shorter;

  let answer = []
  if (arr1.length > arr2.length) {
  	longer = arr1;
    shorter = arr2;
  } else {
  	longer = arr2;
    shorter = arr1;
  }

  for (let i = 0; i < longer.length; i++) {
  	if (!set.has(longer[i])) {
    	set.add(longer[i])						//{9, 4, 9, 8 ,4}
    }
  }

  for (let i = 0; i < shorter.length; i++) {
  	if (set.has(shorter[i])) {
    	array.push(shorter[i])			//[4, 9,]
    }
  }
  return array
}

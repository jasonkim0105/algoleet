//Compress the string:
//Input = AAABBBCCD
//Output = 3A3B2CD

//A
//10A

// function challenge(string) {
// 	let hash = {};    //{A: 3, B: 3, C: 2, D: 1}
//   let answer = '';	//''
//   for (let i = 0; i < string.length; i++) { 	//i = 3
//   	if (!hash[string]){					//hash[B]
//     	hash[string] = 1					//
//     } else {
//     	hash[string]++;
//     }
//   }

//   for (let char of hash) {
//   	if (hash[char] === 1) {
//     	answer += char
//     } else {
//     	answer += hash[char] 				//3A3B2CD
//     	answer += char
//     }

//   }
//   return answer
// }

//Find the unique intersection of two arrays:
//Input = [4,9,5] & [9,4,9,8,4]
//Output = [9,4]

// function uniqueIntersection(arr1, arr2) {
// 	let set = new Set();
//   let longer;
//   let shorter;

//   let answer = []
//   if (arr1.length > arr2.length) {
//   	longer = arr1;
//     shorter = arr2;
//   } else {
//   	longer = arr2;
//     shorter = arr1;
//   }

//   for (let i = 0; i < longer.length; i++) {
//   	if (!set.has(longer[i])) {
//     	set.add(longer[i])						//{9, 4, 9, 8 ,4}
//     }
//   }

//   for (let i = 0; i < shorter.length; i++) {
//   	if (set.has(shorter[i])) {
//     	array.push(shorter[i])			//[4, 9,]
//     }
//   }
//   return array
// }



// function build_file(files) {
//   let nodeMap = {};

//   files.forEach((file) => {
//     file.child = [];
//     nodeMap[file.id] = file
//   })


//   for (const id in nodeMap) {
//     const node = nodeMap[id];
//     if (node.parent !== null) {
//       const parent = nodeMap[node.parent];
//       parent.child.push(node);
//       delete node.parent
//     }
//   }
//   console.log(nodeMap)

//   let result = Object.values(nodeMap).filter((node) => {
//     if (node.parent === null) {
//       delete node.parent;
//       return node
//     }
//   })

//   return result
// }


// console.log(build_file([
//   {
//      id : 1,
//      name : 'Parent',
//      parent : null
//   },
//   {
//      id : 2,
//      name : 'Some Name',
//      parent : 1,
//   },
//   {
//      id : 3,
//      name : 'File 3',
//      parent : 2,
//   },
//   {
//      id : 4,
//      name : 'File 4',
//      parent : null,
//   }
// ]));

// function deleteBlankItems(items) {
//   for (var i = 0; i < items.length; i++) {
//     if (items[i].length == 0) {
//       items.splice(i,1)
//     }
//   }
// }

// var names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
// console.log(deleteBlankItems(names));

// function buildWordTreeFromSentences(sentenceList) {
//   let root = {};
//   sentenceList.forEach(sentence => {
//     let base = root
//     sentence.split(' ').forEach(word => {
//       if (base[word] === undefined) {
//         base[word] = {}
//       }
//       base = base[word]
//     })
//   })
//   return root
// }

// let tree = buildWordTreeFromSentences(['Hello world', 'Hello there'])
// console.log(tree)

const promises = [3, 2, 1].map(d => {
  new Promise(resolve => {
    setTimeout(() => {
      resolve(d)
    }, d * 1000)
  })
})

Promise.race(promises).then((val) => {
  console.log(val)
})

function hasPosNeg(array) {
  let hasPost = false;
  let hasNeg = false;

  array.forEach(num => {
    hasPost = num > 0;
    hasNeg = num < 0
  })

  return [hasPost, hasNeg]
}

console.log(hasPosNeg([-1, 0, 1]))
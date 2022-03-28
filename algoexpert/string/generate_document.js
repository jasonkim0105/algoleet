function generateDocument(characters, document) {
  // Write your code here.
	let obj = {};
	for (let i = 0; i < characters.length; i++) {
		if (!obj[characters[i]]) {
			obj[characters[i]] = 1;
		} else {
			obj[characters[i]]++
		}
	}
	for (let i = 0; i < document.length; i++) {
		if (obj[document[i]]) {
			obj[document[i]]--
		} else {
			return false
		}
	}
  return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;

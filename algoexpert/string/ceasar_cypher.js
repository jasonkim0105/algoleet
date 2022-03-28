function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let res = '';
	let i = 0;
	for (let i = 0; i < string.length; i++) {
		let idx = alphabet.indexOf(string[i]);
		let newIdx = (idx + key) % 26;
		res += alphabet[newIdx]
	}
	return res
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;

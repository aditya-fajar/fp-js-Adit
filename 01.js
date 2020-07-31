const palindrome = (string) => {
	let reg = /[\W_]/g;
	var lowstring = string.toLocaleLowerCase().replace(reg,'')
  	var revstring = lowstring.split('').reverse().join('')
	// console.log(revstring)
  	return lowstring === revstring
};

console.log(palindrome('ibu ratna antar ubi'))
console.log(palindrome('kasur ini rusak'))
console.log(palindrome('A nut for a jar of tuna.'))
console.log(palindrome('Borrow or rob?'))
console.log(palindrome('Was it a car or a cat I saw?'))
console.log(palindrome('Yo, banana boy!'))
console.log(palindrome('UFO tofu?'))

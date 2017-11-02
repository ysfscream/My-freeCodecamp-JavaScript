//	回文数

function palindrome(str) {
	// 请把你的代码写在这里
	str = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
	var newStr = str.split('').reverse().join('').toLowerCase();
	return str === newStr
}

console.log(palindrome("hello"))
function truncate(str, num) {
  // 请把你的代码写在这里
  // if (num < 3) {
  // 	return str.slice(0, num) + '...'
  // }

  // if (num >= str.length) {
  // 	return str
  // }

  // var newStr = str.slice(0, num - 3)

  // newStr += '...'

  // return newStr;

   return num < 3 ? str.slice(0, num) + '...' 
			   		: str.length > num ? str.slice(0, num - 3) + '...' 
			   			: str
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))

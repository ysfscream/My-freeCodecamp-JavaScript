function findLongestWord(str) {
  // 请把你的代码写在这里
  strArr = str.split(' ')
  strlen = strArr.map((item) => item.length)
  var max = strlen[0]
  for(var i = 0; i <strlen.length; i++) {
  	if (strlen[i] > max) {
  		max = strlen[i]
  	}
  }
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

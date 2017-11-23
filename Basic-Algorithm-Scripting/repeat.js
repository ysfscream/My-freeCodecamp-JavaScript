function repeat(str, num) {
  // 请把你的代码写在这里
  var newStr = ''
  for (var i = 0; i < num; i++) {
  	 newStr += str
  }
  return newStr
}

console.log(repeat("abc", 5))

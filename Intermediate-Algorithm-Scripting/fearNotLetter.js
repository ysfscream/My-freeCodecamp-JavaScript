// 从传递进来的字母序列中找到缺失的字母并返回它。
//
// 如果所有字母都在序列中，返回 undefined


function fearNotLetter(str) {
  let flag = false
  const strArr = str.split('')
  for(let i = 0; i<strArr.length; i+=1) {
    if (str.charCodeAt(i) + 1 < str.charCodeAt(i + 1)) {
      flag = true
      str = String.fromCharCode(str.charCodeAt(i)+1)
      break
    }
  }
  return flag ? str : undefined;
}

console.log(fearNotLetter("abc"))

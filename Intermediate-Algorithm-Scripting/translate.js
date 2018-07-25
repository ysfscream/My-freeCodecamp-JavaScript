// 把指定的字符串翻译成 pig latin。
//
// Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
//
// 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。

function translate(str) {
  const Reg = /[aeiou]/gi
  if (Reg.test(str[0])) {
    str = `${str}way`
  } else {
    const strArr = str.split('')
    for(let i = 0; i<strArr.length; i+=1) {
      if (!Reg.test(str[i])) {
        const index = strArr.indexOf(str[i])
        strArr.push(str[i])
        strArr.splice(index, 1)
      } else {
        break // 发现不是后 立即返回
      }
    }
    str = strArr.join('') + 'ay'
  }
  return str
}

console.log(translate('glove'))

// 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。


function spinalCase(str) {
  const reg = /\s+|_+/g
  // 在小写字母和大写字母中添加下划线或空格
  // str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
  str = str.replace(/([a-z])([A-Z])/g, '$1_$2')
  return str.replace(reg, '-').toLowerCase()
}

console.log(spinalCase('thisIsSpinalTap'))

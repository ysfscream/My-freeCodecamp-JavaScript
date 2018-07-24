/* 使用给定的参数对句子执行一次查找和替换，然后返回新句子。 */
//
// 第一个参数是将要对其执行查找和替换的句子。
//
// 第二个参数是将被替换掉的单词（替换前的单词）。
//
// 第三个参数用于替换第二个参数（替换后的单词）。
//
/* 注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"� */��


function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before.charAt(0))) {
    after = after.substr(0, 1).toUpperCase() + after.substr(1)
  }
  let strArr = str.split(' ')
  const itemIndex = strArr.indexOf(before)
  strArr.splice(itemIndex, 1, after)
  return strArr.join(' ');
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))


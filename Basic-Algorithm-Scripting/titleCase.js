// 句中单词首字母大写

function titleCase(str) {
  // 请把你的代码写在这里

  // 拆分为字符串 正则表达式替换的方法
  return str.split(' ').map( (item) => item.toLowerCase().replace(/^\S/, item.charAt(0).toUpperCase()) ).join(' ')
}

console.log(titleCase("i'm a little tea pot"));
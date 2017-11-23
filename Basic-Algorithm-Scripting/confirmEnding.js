function confirmEnding(str, target) {
  // 请把你的代码写在这里

  //正则表达式中 加入变量 使用构造函数

  var reg = new RegExp(target + '$')
  
  return reg.test(str)
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "frozen"))

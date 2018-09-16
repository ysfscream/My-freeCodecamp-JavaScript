// 如果传入字符串是一个有效的美国电话号码，则返回 true.
//
// 用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):

function telephoneCheck(str) {
  return /^(1|1\s)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/.test(str);
}



console.log(telephoneCheck("555-555-5555"))


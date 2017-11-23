function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里

  const Max = 90
  const Min = 65
  let num = 0
  let tempArr = [] 

  strArr = str.toUpperCase().split(' ')

  //  转换单个字符方法
  function roteOne(value) {
  	if (/[^A-Z]+/g.test(value)) {
  			return value
  	}
  	num = value.charCodeAt(0) + 13
	  if (num > Max) {
	  	num = (num - Max) + (Min - 1)
	  	return String.fromCharCode(num)
	  }
	  return String.fromCharCode(num)
  }

  //  把数组中每一项字母转换
  for (let i = 0; i < strArr.length; i++) {
  	str = strArr[i].split('').map(item => {
  		return roteOne(item)
  	}).join('')
 		tempArr.push(str)
 		str = ''
  }

  //  转换完成链接数组为字符串
  return tempArr.join(' ')
  
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // 你可以修改这一行来测试你的代码


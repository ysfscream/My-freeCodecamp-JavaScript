// 将给定的数字转换成罗马数字

function convert(num) {
  const romanSymbol = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let romanStr = ''
  Object.keys(romanSymbol).forEach((key) => {
    while (num >= romanSymbol[key]) {
      romanStr += key
      num -= romanSymbol[key]
    }
  })
  return romanStr
}

console.log(convert(12))

// DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
//
// Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
//
// 在每一个数组中将给定的字母作为第一个碱基返回。
//
// 例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]


function pair(str) {
  const strArr = str.split('')
  const paired = []
  strArr.forEach((item) => {
    switch(item) {
      case 'A':
        paired.push(['A', 'T'])
        break
      case 'T':
        paired.push(['T', 'A'])
        break
      case 'G':
        paired.push(['G', 'C'])
        break
      case 'C':
        paired.push(['C', 'G'])
        break
    }
  })
  return paired
}

console.log(pair("GCG"))

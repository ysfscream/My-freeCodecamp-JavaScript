// 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
//
// 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。


function smallestCommons(arr) {
  const allNumArr = []
  arr.sort((prev, next) => {
    return prev - next
  })
  var min = arr[0]
  var max = arr[1]
  for(let i=min; i<=max; i+=1) {
    allNumArr.push(i)
  }
  const gcd = (a, b) => {
    if (b) {
      return gcd(b, a % b)
    }
    return a
  }
  return allNumArr.reduce((prev,cur) => {
    return prev*cur/gcd(prev,cur);
  })
}


console.log(smallestCommons([1,5]))


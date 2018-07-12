// 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

function sumAll(arr) {
  const allNumArr = []
  arr.sort((prev, next) => {
    return prev - next
  })
  const min = arr[0]
  const max = arr[1]
  for(let i=min; i<=max; i+=1) {
    allNumArr.push(i)
  }
  return allNumArr.reduce((prev, next) => prev + next)
}

console.log(sumAll([4, 1]))

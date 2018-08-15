// 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
//
// 例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。
//
// 调用这个有一个参数的返回的 function，返回求和的结果：
//
// var sumTwoAnd = add(2);
//
// sumTwoAnd(3) 返回 5。


function add() {
  const isN = (n) => {
    return typeof n === 'number'
  }
  let allArr = [...arguments]
  if (arguments.length === 1) {
    const a = arguments[0]
    if (isN(a)) {
      return (b) => {
        if (isN(b)) {
          return a + b
        }
      }
    }
  } else {
    for (let i = 0; i<allArr.length; i+=1) {
      if (!(isN(allArr[i]))) {
       return undefined
      }
    }
    return allArr.reduce((prev, next) => prev + next)
  }
}

// const addTwo = add(2)
// addTwo(3)

console.log(add(2))

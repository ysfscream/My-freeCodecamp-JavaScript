// 创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.


function sym(args) {
  const unique = (arr) => [...new Set(arr)] // 去重
  const diffArr = (arr1, arr2) => {
    const newArr = [...unique(arr1), ...unique(arr2)] // 求出差值
    return newArr.filter((arr) => newArr.indexOf(arr) === newArr.lastIndexOf(arr))
  }
  const allArr = [...arguments]
  return allArr.reduce((prev, next) => diffArr(prev, next))
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))


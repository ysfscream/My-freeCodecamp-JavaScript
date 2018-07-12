// 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异

function diff (arr1, arr2) {
  const newArr = [...arr1, ...arr2]
  return newArr.filter((item) => newArr.indexOf(item) === newArr.lastIndexOf(item))
}

console.log(diff([1, 2], [1, 2, 3]))

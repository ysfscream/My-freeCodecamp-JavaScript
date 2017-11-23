function where(arr, num) {
  // 请把你的代码写在这里

  arr.push(num)

  let upArr = arr.sort((a, b) => {
  	return a - b
  })

  return upArr.indexOf(num)
}

console.log(where([2, 20, 10], 19));
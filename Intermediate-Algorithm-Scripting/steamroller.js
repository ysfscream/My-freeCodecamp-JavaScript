// 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。


function steamroller(arr) {
  const newArr = []
  const extendArr = (arr) => {
    if (!Array.isArray(arr)) {
      newArr.push(arr)
    } else {
      arr.forEach((item) => {
        extendArr(item)
      })
    }
    // arr.forEach((item) => {
    //   if (Array.isArray(item)) {
    //     extendArr(item)
    //   } else {
    //     newArr.push(item)
    //   }
    // })
  }
  arr.forEach(extendArr)
  return newArr;
}

console.log(steamroller([1, [2], [3, [[4]]]]))

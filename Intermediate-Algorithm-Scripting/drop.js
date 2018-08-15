// 第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
//
// 最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。


function drop(arr, func) {
  // Drop them elements.
  const newArr = []
  Object.assign(newArr, arr)
  for (let i = 0; i<newArr.length; i+=1) {
    if (!func(newArr[i])) {
      arr.shift(newArr[i])
    } else {
      break
    }
  }
  return arr;
}

drop([0, 1, 0, 1], function(n) {return n === 1; });

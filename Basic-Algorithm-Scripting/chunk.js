function chunk(arr, size) {
  // 请把你的代码写在这里
  let allArr = []

  const len = arr.length

  for (var i = 0; i < len; i += size) {
  	allArr.push(arr.slice(i, i + size)) 
  }

  return allArr
}

console.log(chunk(["a", "b", "c", "d"], 2));


function destroyer(arr) {
  // 请把你的代码写在这里
  let desArr = []

 	for (let i = 1; i < arguments.length; i++) {
 		desArr.push(arguments[i])
 	}

 	return arr.filter(item => desArr.indexOf(item) === -1)
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
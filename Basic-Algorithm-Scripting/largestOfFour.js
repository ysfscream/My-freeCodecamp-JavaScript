function largestOfFour(arr) {
  // 请把你的代码写在这里

  // var maxArr = []
 	// for (let i = 0; i < arr.length; i++) {
	 // 	maxArr.push((function(numArr) {
 	// 		var max = numArr[0]
	 //  	for (var i = 0; i < numArr.length; i++) {
	 //  		if (max < numArr[i]) {
	 //  			max = numArr[i]
	 //  		}
	 //  	}
	 //  	return max
	 // 	})(arr[i]))
 	// }
 	// return maxArr

  return arr.map((items) => {
  	return items.reduce((prev, next) => {
  		return prev > next ? prev : next
  	})
  })

}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
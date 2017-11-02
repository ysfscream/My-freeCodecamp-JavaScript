//	阶乘

function factorialize (num) {
	if (num === 1 || num === 0) {
		return 1
	} else {
		
		// for (var i = num - 1; i >= 1; i--) {
		// 	num *= i
		// }
		// return num 
		// 传统 for 循环

		return num * factorialize(num - 1) // 递归调用
	}
}
console.log(factorialize(5))


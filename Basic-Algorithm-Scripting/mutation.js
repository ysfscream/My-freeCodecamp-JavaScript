	function mutation(arr) {
	  // 请把你的代码写在这里
	  arr1 = arr[0].toLowerCase().split('');
	  arr2 = arr[1].toLowerCase().split('');

	  let flag = 0

		for (let i = 0; i < arr2.length; i++) {
			if (arr1.indexOf(arr2[i]) === -1) {
				flag += 1
			}
		}

		return flag === 0

	}

console.log(mutation(["hello", "hey"]));

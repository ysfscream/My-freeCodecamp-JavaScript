// 写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素。举个例子，如果 arr 为 [1, 2, 3]，func 为 function(num) {return num === 2; }，那么 find 的返回值应为 2。


function find(arr, func) {
  let num = undefined;
  for (let i=0; i<arr.length; i+=1) {
    if (func(arr[i])) {
      num = arr[i]
      break
    }
  }
  return num;
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }))

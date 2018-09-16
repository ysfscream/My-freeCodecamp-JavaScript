function updateInventory (arr1, arr2) {
  if (!arr1.length) {
    arr1 = arr2
  } else {
    arr1.forEach((item1) => {
      arr2.forEach((item2) => {
        if (item2[1] === item1[1]) {
          item1[0] += item2[0]
        } else if (arr1.join().indexOf(item2[1]) === -1) {
          arr1.push(item2)
        }
      })
    })
  }
  arr1.sort((prev, next) => {
    return prev[1] - next[1]
  })
  // 请保证你的代码考虑到所有情况
  return arr1
}

// 仓库库存示例
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

console.log(updateInventory(curInv, newInv))

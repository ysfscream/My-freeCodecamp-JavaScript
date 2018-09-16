// function checkCashRegister(price, cash, cid) {
//   cash *= 100
//   price *= 100
//   let change = cash - price
//   const result = []

//   const totalChange = cid.map((item) => item[1]*100).reduce((next, prev) => next + prev)
//   if(totalChange < change) {
//     return "Insufficient Funds"
//   }
//   else if(totalChange === change) {
//     return "Closed"
//   }

//   const getCurrent = (coin) => {
//     switch (coin) {
//       case 'PENNY': return 1
//       case 'NICKEL': return 5
//       case 'DIME': return 10
//       case 'QUARTER': return 25
//       case 'ONE': return 100
//       case 'FIVE': return 500
//       case 'TEN': return 1000
//       case 'TWENTY': return 2000
//       case 'ONE HUNDRED': return 10000
//     }
//   }

//   const exactChange = () => {
//     cid.forEach((item) => {
//       const nowValue = getCurrent(item[0]); //当前面值
//       const needNum = Math.floor(change / nowValue)
//       const nowNum = Math.floor(item[1] * 100 / nowValue)
//       const finalNum = Math.min(nowNum, needNum)
//       if (finalNum !== 0) {//进入需要的面值 对其操作
//         result.push([item[0], finalNum * nowValue / 100])
//         change -= finalNum * nowValue
//       }
//     })
//   }
//   exactChange()
//   if (!change) {
//     return result
//   } else {
//     return 'Insufficient Funds'
//   }
// }

// https://www.jianshu.com/p/1859d6e8e8ef 解法

function checkCashRegister (price, cash, cid) {
  cash *= 100; // 将美元转换成美分 都是整数便于计算 最后要转换回来
  price *= 100
  const getToalCash = (arr) => { // 获取收银机里面的剩余钱数 传入cid数组
    return arr.map((item) => item[1] * 100).reduce((next, prev) => next + prev)
  }
  const transformCoin = (coin) => { // 转换钱币到美分
    switch (coin) {
      case 'PENNY':
        return 1
      case 'NICKEL':
        return 5
      case 'DIME':
        return 10
      case 'QUARTER':
        return 25
      case 'ONE':
        return 100
      case 'FIVE':
        return 500
      case 'TEN':
        return 1000
      case 'TWENTY':
        return 2000
      case 'ONE HUNDRED':
        return 10000
    }
  }

  let change = cash - price; // 需要的找零
  const totalCash = getToalCash(cid); // 收银机剩余总钱数
  const result = []; // 存放结果数组
  if (totalCash < change) { // 收银机总钱数小于要找零
    return 'Insufficient Funds'
  }
  else if (totalCash === change) { // 收银机总钱数正好等于要找零
    return 'Closed'
  }

  if (totalCash > change) {
    for (let i = cid.length - 1; i >= 0; i--) {
      const str = cid[i][0]
      const val = cid[i][1]
      const nowValue = transformCoin(str); // 当前面值
      const needNum = Math.floor(change / nowValue)
      const nowNum = Math.floor(val * 100 / nowValue)
      const finalNum = Math.min(nowNum, needNum)
      if (finalNum) { // 进入需要的面值 对其操作
        result.push([str, finalNum * nowValue / 100])
        change -= finalNum * nowValue
      }
    }
    // 找零结束 判断找零change最后是否为0 
    if (!change) { // change 最后为0 说明完成找零 
      console.log(result)
      return result
    }else {
      return 'Insufficient Funds'
    }
  }
}

console.log(checkCashRegister(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]))

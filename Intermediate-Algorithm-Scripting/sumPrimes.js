// 求小于等于给定数值的质数之和。
//
// 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
//
// 给定的数不一定是质数。


function sumPrimes(num) {
  const arr = []
  const isPrime = (n) => { // 判断是否是素数
    if (n < 2) {
      return false
    }
    if (n === 2 || n === 3) {
      return true
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false
    }
    for (let j = 3; j <= Math.sqrt(n); j+=2) {
      if (n % j === 0) {
        return false
      }
    }
    return true
  }
  for (let i=2; i<=num; i+=1) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }
  return arr.reduce((prev, next) => prev + next);
}

console.log(sumPrimes(977))

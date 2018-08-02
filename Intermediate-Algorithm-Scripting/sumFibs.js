// 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

function sumFibs(num) {
  // 数组缓存 求出斐波那契数组
  const  cache = [1, 1]
  const fibs = (n) => {
    if (n >= cache.length) {
      for (let i = cache.length; i<n; i+=1) {
        cache[i] = cache[i-2] + cache[i-1]
      }
    }
  }
  fibs(num)
  return cache.filter((item) => item <= num && item % 2 !== 0).reduce((prev, next) => prev + next)
}

console.log(sumFibs(4))

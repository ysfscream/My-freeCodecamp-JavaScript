function permAlone(str) {
  const anagrams = (str) => { // 求出所有的排列组合
    if (str.length <= 2) {
       return str.length === 2 ? [str, str[1] + str[0]] : [str];
    } else{
       return str.split('').reduce((acc, letter, i) =>
       acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);
    }
  }
  const allArr = anagrams(str)
  const filtered = allArr.filter((item) => !item.match(/(.)\1+/g))
  return filtered.length
}

console.log(permAlone('aa'))


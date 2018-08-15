// 如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。


function every(collection, pre) {
  // Is everyone being true?
  for (let i=0; i<collection.length; i+=1) {
    const item = collection[i]
    if (!item[pre]) {
      return false
    }
  }
  return true
}

console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))


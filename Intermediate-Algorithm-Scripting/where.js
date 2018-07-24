// 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。

function where(collection, source) {
  let arr = [];
  arr = collection.filter((item) => {
    return Object.keys(source).every((key) => {
      return item.hasOwnProperty(key) && item[key] === source[key]
    })
  })
  // What's in a name?
  return arr;
}

console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))

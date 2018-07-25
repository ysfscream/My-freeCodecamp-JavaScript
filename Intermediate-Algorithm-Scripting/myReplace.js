
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before[0])) {
    after = after.substr(0, 1).toUpperCase() + after.substr(1)
  }
  let strArr = str.split(' ')
  const itemIndex = strArr.indexOf(before)
  strArr.splice(itemIndex, 1, after)
  return strArr.join(' ');
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))


function orbitalPeriod(arr) {
  const res = []
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const getOrbitalPeriod = (avg, GM, radius) => {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(avg + radius, 3) / GM))
  }
  arr.forEach((item) => {
    res.push({
      name: item.name,
      orbitalPeriod: getOrbitalPeriod(item.avgAlt, GM, earthRadius)
    })
  })
  return res;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))


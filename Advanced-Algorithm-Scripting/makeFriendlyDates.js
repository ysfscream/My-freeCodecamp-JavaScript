function makeFriendlyDates(arr) {
  const res = []

  const getMonth = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December']
  const getDays = ['1st', '2nd', '3rd', '4th', '5th', '6th',
    '7th', '8th', '9th', '10th', '11th', '12th', '13th',
    '14th', '15th', '16th', '17th', '18th', '19th', '20th',
    '21st', '22nd', '23rd', '24th', '25th', '26th', '27th',
    '28th', '29th', '30th', '31st']
  const getTime = (str) => str.split('-')
  const getNewDate = (dateArr) => {
    const month = getMonth[parseInt(dateArr[1])-1]
    const day = getDays[parseInt(dateArr[2])-1]
    const year = dateArr[0]
    return `${month} ${day}, ${year}`
  }
    //返回两个日期相差的天数
  const  daysBetw = (date1,date2) => {
    //这里的date1、date2为日期的字符串
    //将date1,date2转换为Date对象
    const _dt1=new Date(date1);
    const _dt2=new Date(date2);
    const dt1=_dt1.getTime();
    const dt2=_dt2.getTime();
    return parseInt(Math.abs(dt1- dt2)/1000/60/60/24);
  }
  const intervalDays = daysBetw(arr[0], arr[1])
  let start = getNewDate(getTime(arr[0]))
  let end = getNewDate(getTime(arr[1]))
  const startMonth = getTime(arr[0])[1]
  const endMonth = getTime(arr[1])[1]
  const startDay = getTime(arr[0])[2]
  const endDay = getTime(arr[1])[2]
  const startYear = getTime(arr[0])[0]
  const endYear = getTime(arr[1])[0]
  if (startYear > endYear) {
    return undefined
  }
  if (getTime(arr[0]).toString() === getTime(arr[1]).toString()) {
    res.push(start)
    return res
  }
  if (intervalDays < 365) {
    end = end.substr(0, end.indexOf(','))
  }
  if (intervalDays <= 31 && startMonth === endMonth) {
    start = start.substr(0, start.indexOf(','))
    end = end.split(' ')[1]
    res.push(start, end)
    return res
  }
  if (parseInt(getTime(arr[0])[0]) === (new Date().getFullYear() - 1) && intervalDays < 365) {
    start = start.substr(0, start.indexOf(','))
    res.push(start, end)
    return res
  }
  if (startMonth === endMonth && startDay === endDay && intervalDays < 365) {
    console.log(start)
    return start
  }
  res.push(start, end)
  return res
}

console.log(makeFriendlyDates(["2008-10-31", "2009-10-31"]))


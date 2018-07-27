// 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。


function convert(str) {
  // str = str.replace(/&/g, '&amp;')
  // str = str.replace(/\'/g, '&apos;')
  // str = str.replace(/\"/g, '&quot;')
  // str = str.replace(/</g, '&lt;')
  // str = str.replace(/>/g, '&gt;')
  const htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':'&apos;'
  }
  return str.split('').map((item) => htmlEntities[item] || item).join('')
}

console.log(convert("Dolce & 'Gabbana'"))


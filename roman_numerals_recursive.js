function toRoman(input) {
  // start your code here

  var rumus = {'M' : 1000,
               'D' : 500,
               'CD': 400,
               'C' : 100,
               'L' : 50,
               'LX' :40,
               'X' : 10,
               'IX' : 9,
               'V' : 5,
               'IV' : 4,  
               'I' : 1      
              }
if(input === 0){
  return ''
}
else{
  for(var i in rumus){
    while(input >= rumus[i]){
      return i + toRoman(input -rumus[i])
    }
  }
  
}
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman

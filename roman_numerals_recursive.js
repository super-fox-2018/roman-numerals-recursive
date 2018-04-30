function toRoman(input) {
  // start your code here
  if (input === 0) {
    return '';
  }

  var romanKeys = [
    {key: 'M', val: 1000},
    {key: 'CM', val: 900},
    {key: 'D', val: 500},
    {key: 'CD', val: 400},
    {key: 'C', val: 100},
    {key: 'XC', val: 90},
    {key: 'L', val: 50},
    {key: 'XL', val: 40},
    {key: 'X', val: 10},
    {key: 'IX', val: 9},
    {key: 'V', val: 5},
    {key: 'IV', val: 4},
    {key: 'I', val: 1}
  ];

  var display = '';

  for (var i = 0; i < romanKeys.length; i++) {
    if (input >= romanKeys[i].val) {
      display = display + romanKeys[i].key;
      input = input - romanKeys[i].val
    }
  }
  
  return display + toRoman(input);
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

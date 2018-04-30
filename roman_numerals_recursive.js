function toRoman(input) {
  if (input === 0) {return '';}
  let roman = '';
  let romanArray = [
  {name: 'M', value: 1000},
  {name: 'CM', value: 900},
  {name: 'D', value: 500},
  {name: 'CD', value: 400},
  {name: 'C', value: 100},
  {name: 'XC', value: 90},
  {name: 'L', value: 50},
  {name: 'XL', value: 40},
  {name: 'X', value: 10},
  {name: 'IX', value: 9},
  {name: 'V', value: 5},
  {name: 'IV', value: 4},
  {name: 'I', value: 1},
  ];
  for (var i = 0; i < romanArray.length; i++) {
    if (input >= romanArray[i].value) {
      roman += romanArray[i].name;
      input -= romanArray[i].value;
    }
  }
  return roman + toRoman(input);
}

console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|————————');
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('23    | XXIII    | ', toRoman(23));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MDCXLVI  | ', toRoman(1646));

module.exports = toRoman;

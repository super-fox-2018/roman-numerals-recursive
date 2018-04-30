function toRoman(input) {
  if (input === 0) return '';
  
  if (input - 1000 >= 0) return 'M' + toRoman(input-1000);
  if (input - 900 >= 0) return 'CM' + toRoman(input-900);
  if (input - 500 >= 0) return 'D' + toRoman(input-500);
  if (input - 400 >= 0) return 'CD' + toRoman(input-400);
  if (input - 100 >= 0) return 'C' + toRoman(input-100);
  if (input - 90 >= 0) return 'XC' + toRoman(input-90);
  if (input - 50 >= 0) return 'L' + toRoman(input-50);
  if (input - 40 >= 0) return 'XL' + toRoman(input-40);
  if (input - 10 >= 0) return 'X' + toRoman(input-10);
  if (input - 9 >= 0) return 'IX' + toRoman(input-9);
  if (input - 5 >= 0) return 'V' + toRoman(input-5);
  if (input - 4 >= 0) return 'IV' + toRoman(input-4);
  if (input - 1 >= 0) return 'I' + toRoman(input-1);
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

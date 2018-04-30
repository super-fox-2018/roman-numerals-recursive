function toRoman(input) {
  var resultRomanNumeral=[]
  var romanNumeral=[
    {
      number:1000,
      roman:'M'
    },
    {
      number:900,
      roman:'CM'
    },
    {
      number:500,
      roman:'D'
    },
    {
      number:400,
      roman:'CD'
    },
    {
      number:100,
      roman:'C'
    },
    {
      number:90,
      roman:'XC'
    },
    {
      number:50,
      roman:'L'
    },
    {
      number:40,
      roman:'XL'
    },
    {
      number:10,
      roman:'X'
    },
    {
      number:9,
      roman:'IX'
    },
    {
      number:5,
      roman:'V'
    },
    {
      number:4,
      roman:'IV'
    },
    {
      number:1,
      roman:'I'
    }
  ]

if (input === 0) {
  return '';
}
else {
  for (var i = 0; i < romanNumeral.length; i++) {
    while (input >= romanNumeral[i].number) {
      input = input - romanNumeral[i].number
      return romanNumeral[i].roman + toRoman(input);
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

// module.exports = toRoman

function toRoman(input) {
  const romaninput = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' }
  if (input === 0){
    return '';
  }
  if (input === 1){
    return romaninput[1];
  }
  if (input > 3000) {
    return "Invalid";
  }

  for (var key in romaninput) {
      if (parseInt(key) === input) {
          input = input - parseInt(key);
          return romaninput[key] + toRoman(input)
      }
  }

    if (input >= 1000 && input <= 3000) {
      input = input - 1000;
      return romaninput[1000] + toRoman(input);
    } else if (input >= 900) {
      input = input - 900;
      return romaninput[900] + toRoman(input);
    }
    else if (input >= 500) {
      input = input - 500;
      return romaninput[500] + toRoman(input);
    } else if (input >= 400) {
      input = input - 400;
      return romaninput[400] + toRoman(input);
    }
    else if (input >= 100) {
      input = input - 100;
      return romaninput[100] + toRoman(input);
    } else if (input >= 90) {
      input = input - 90;
      return romaninput[90] + toRoman(input);
    }
    else if (input >= 50) {
      input = input - 50;
      return romaninput[50] + toRoman(input);
    }
    else if (input >= 40) {
      input = input - 40;
      return romaninput[40] + toRoman(input);
    }
    else if (input >= 10) {
      input = input - 10;
      return  romaninput[10] + toRoman(input);
    }
    else if (input >= 5) {
      input = input - 5;
      return romaninput[5] + toRoman(input);
    } else if (input > 0) {
      input = input - 1;
      return romaninput[1] + toRoman(input);
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

function to_roman(num) {
  if (num === 0) {
    return '';
  }

  if (num >= 1000) {
    return 'M' + to_roman(num - 1000);
  } else if (num >= 900) {
    return 'CM' + to_roman(num - 900);
  } else if (num >= 500) {
    return 'D' + to_roman(num - 500);
  } else if (num >= 400) {
    return 'CD' + to_roman(num - 400);
  } else if (num >= 100) {
    return 'C' + to_roman(num - 100);
  } else if (num >= 90) {
    return 'XC' + to_roman(num - 90);
  } else if (num >= 50) {
    return 'L' + to_roman(num - 50);
  } else if (num >= 40) {
    return 'XL' + to_roman(num - 40);
  } else if (num >= 10) {
    return 'X' + to_roman(num - 10);
  } else if (num === 9) {
    return 'IX';
  } else if (num >= 5) {
    return 'V' + to_roman(num - 5);
  } else if (num === 4) {
    return 'IV';
  } else if (num < 4) {
    return 'I' + to_roman(num - 1);
  }
}

// Drive code
console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|———————');
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));
console.log(to_roman(48));
console.log(to_roman(389));

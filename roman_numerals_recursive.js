function to_roman (num) {
  var roman = ["I","IV","V","IX","X", "XL", "L", "C", "CD", "D", "CM", "M"];
  var number = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 900, 1000];
  var arr = [];

  if(num === 0){
    arr =  arr.join("");
    return arr;
  }
  else{
    for( var i = number.length - 1; i > 0; i--){
      if(num < number[i] && num >= number[i-1]){
        if(num === number[i]){
          arr.push(roman[i]);
          num -= number[i];
          arr = arr.join("");
          return(arr + to_roman(num));
        }
        else{
          arr.push(roman[i-1]);
          num -= number[i-1];
          arr = arr.join("");
          return(arr + to_roman(num));
        }
      }
      else if(num >= number[number.length - 1]){
        arr.push(roman[number.length - 1]);
        num -= number[number.length - 1];
        arr = arr.join("");
        return(arr + to_roman(num));
      }
    }
  }
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))

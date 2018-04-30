function toRoman(input) {
  var ang_romawi = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  var ang_latin = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  if(input===0){
    return '';
  }
  else if (input>=ang_latin[ang_latin.length-1]) {
    return ang_romawi[ang_romawi.length-1] + toRoman(input-ang_latin[ang_latin.length-1]);
  }
  else{
    for (var i = 0; i < ang_latin.length; i++) {
      if(input >= ang_latin[i] && input < ang_latin[i+1]){

      return ang_romawi[i]+toRoman(input-ang_latin[i]);
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

// module.exports = toRoman;

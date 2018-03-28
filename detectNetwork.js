// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  var cardLength = cardNumber.length;
  var prefix1 = cardNumber.slice(0,1);
  var prefix2 = cardNumber.slice(0,2);
  var prefix3 = cardNumber.slice(0,3);
  var prefix4 = cardNumber.slice(0,4);
  var prefix6 = cardNumber.slice(0,6);

  if(cardLength === 14 && prefix2 === '38' || cardLength === 14 && prefix2 === '39'){
    return 'Diner\'s Club';
  }else if(cardLength === 15 && prefix2 === '34' || cardLength === 15 && prefix2 === '37'){
    return 'American Express';
  }else if((range(4903, 4936, prefix4) && range(16, 19, cardLength)) || (prefix4 === '6333' && range(16, 19, cardLength)) || (prefix4 === '6759' && range(16, 19, cardLength))){
    return 'Switch';
  }else if((cardLength === 13 || 16 || 19) && prefix1 === '4' && !arraySwitch(prefix4)){
    return 'Visa';
  }else if(cardLength === 16 && range(51, 55, prefix2)){
    return 'MasterCard';
  }else if(((cardLength === 16 || 19 ) && prefix2 === '65') || ((cardLength === 16 || 19) && range(644, 649, prefix3)) || ((cardLength === 16 ||  19) && prefix4 === '6011')){
    return 'Discover';
  }else if((range(12, 19, cardLength) && prefix4 === '5018') || (range(12, 19, cardLength) && prefix4 === '5020') || (range(12, 19, cardLength) && prefix4 === '5038') || (range(12, 19, cardLength) && prefix4 === '6304')){
    return 'Maestro';
  }else if((range(624, 626, prefix3) && range(16, 19, cardLength)) || (range(6282, 6288, prefix4) && range(16, 19, cardLength)) || (range(622126, 622925, prefix6) && range(16, 19, cardLength))){
    return 'China UnionPay';
  }
// Once you've read this, go ahead and try to implement this function, then return to the console.
};

function range(min, max, num){
  var value = Number(num);

  if(min <= value && value <= max){
    return true;
  } 
}

function arraySwitch(number){
  var array = ['4903', '4905', '4911', '4936'];

  return array.includes(number);
}




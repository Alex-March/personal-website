function convertToRoman(num) {
  let finalArray = {};

  let strNum = num.toString();

// Four digit handling
  // function fourDig() {
  (() => {
    if (strNum.length == 4) {
      switch(strNum[0]) {
        case '0':
          finalArray.thousands = '';
          strNum = strNum.slice(1,);
          break;
        case '1':
          finalArray.thousands = 'M';
          strNum = strNum.slice(1,);
          break;
        case '2':
          finalArray.thousands = 'MM';
          strNum = strNum.slice(1,);
          break;
        case '3':
          finalArray.thousands = 'MMM';
          strNum = strNum.slice(1,);
          break;
        case '4':
          finalArray.thousands = 'MMMM';
          strNum = strNum.slice(1,);
          break;
      } 
    }
  })();

// Three digit handling
  (() => {
    if (strNum.length == 3) {
      switch(strNum[0]) {
        case '0':
          finalArray.hundreds = '';
          strNum = strNum.slice(1,);
          break;
        case '1':
          finalArray.hundreds = 'C';
          strNum = strNum.slice(1,);
          break;
        case '2':
          finalArray.hundreds = 'CC';
          strNum = strNum.slice(1,);
          break;
        case '3':
          finalArray.hundreds = 'CCC';
          strNum = strNum.slice(1,);
          break;
        case '4':
          finalArray.hundreds = 'CD';
          strNum = strNum.slice(1,);
          break;
        case '5':
          finalArray.hundreds = 'D';
          strNum = strNum.slice(1,);
          break;
        case '6':
          finalArray.hundreds = 'DC';
          strNum = strNum.slice(1,);
          break;
        case '7':
          finalArray.hundreds = 'DCC';
          strNum = strNum.slice(1,);
          break;
        case '8':
          finalArray.hundreds = 'DCCC';
          strNum = strNum.slice(1,);
          break;
        case '9':
          finalArray.hundreds = 'CM';
          strNum = strNum.slice(1,);
          break;
      } 
    }
  })();

// Two digit handling
  (() => {
    if (strNum.length == 2) {
      switch(strNum[0]) {
        case '0':
          finalArray.tens = '';
          strNum = strNum.slice(1,);
          break;
        case '1':
          finalArray.tens = 'X';
          strNum = strNum.slice(1,);
          break;
        case '2':
          finalArray.tens = 'XX';
          strNum = strNum.slice(1,);
          break;
        case '3':
          finalArray.tens = 'XXX';
          strNum = strNum.slice(1,);
          break;
        case '4':
          finalArray.tens = 'XL';
          strNum = strNum.slice(1,);
          break;
        case '5':
          finalArray.tens = 'L';
          strNum = strNum.slice(1,);
          break;
        case '6':
          finalArray.tens = 'LX';
          strNum = strNum.slice(1,);
          break;
        case '7':
          finalArray.tens = 'LXX';
          strNum = strNum.slice(1,);
          break;
        case '8':
          finalArray.tens = 'LXXX';
          strNum = strNum.slice(1,);
          break;
        case '9':
          finalArray.tens = 'XC';
          strNum = strNum.slice(1,);
          break;
      } 
    }
  })();

// One digit handling
  (() => {
    if (strNum.length == 1) {
      switch(strNum[0]) {
        case '0':
          finalArray.ones = '';
          strNum = strNum.slice(1,);
          break;
        case '1':
          finalArray.ones = 'I';
          strNum = strNum.slice(1,);
          break;
        case '2':
          finalArray.ones = 'II';
          strNum = strNum.slice(1,);
          break;
        case '3':
          finalArray.ones = 'III';
          strNum = strNum.slice(1,);
          break;
        case '4':
          finalArray.ones = 'IV';
          strNum = strNum.slice(1,);
          break;
        case '5':
          finalArray.ones = 'V';
          strNum = strNum.slice(1,);
          break;
        case '6':
          finalArray.ones = 'VI';
          strNum = strNum.slice(1,);
          break;
        case '7':
          finalArray.ones = 'VII';
          strNum = strNum.slice(1,);
          break;
        case '8':
          finalArray.ones = 'VIII';
          strNum = strNum.slice(1,);
          break;
        case '9':
          finalArray.ones = 'IX';
          strNum = strNum.slice(1,);
          break;
      } 
    }
  })();

// putting combining all key values and returning final string:
  return Object.values(finalArray).join("");
}

convertToRoman(2);

// console.log(convertToRoman(2561));
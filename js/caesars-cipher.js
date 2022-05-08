
const str = document.getElementById("userinput").value;

function rot13(str) {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {

// for letters A-M, shift down 13
    if (str.charCodeAt([i]) >= 65 && str.charCodeAt([i]) <= 77) {
      newArr.push(String.fromCharCode(str.charCodeAt([i]) + 13));
    } 
// for letters N-Z, shift up 13
    else if (str.charCodeAt([i]) >= 78 && str.charCodeAt([i]) <= 90) {
      newArr.push(String.fromCharCode(str.charCodeAt([i]) - 13));
    } 
// for chars other than A-Z, pass the values through
    else {
      newArr.push(str[i]);
    }
  }
// convert array to string
  document.write(newArr.join(""));
  return newArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
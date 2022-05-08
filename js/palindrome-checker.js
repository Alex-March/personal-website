function palindrome(str) {
  let forwards = [];
  let backwards = [];
  let splitStr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")

  for (let i = 0; i < splitStr.length; i++) {
    forwards.push(splitStr[i]);
  }

  for (let i = 0; i < splitStr.length; i++) {
    backwards.unshift(splitStr[i]);
  }

  let fStr = forwards.join('');
  let bStr = backwards.join('');

  if (fStr === bStr) {
    return true;
  } else {
    return false;
  }


}

palindrome("E^*_ yeq");
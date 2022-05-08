function telephoneCheck(str) {
  // hopefully this never needs to be troubleshooted :(
  let regex = /^(\d{10})$|^(\d{3}-\d{3}-\d{4})$|^(\d\s\d{3}-\d{3}-\d{4})$|^(1\s\(\d{3}\)-\d{3}-\d{4})$|^(1\s\(\d{3}\)\s\d{3}-\d{4})$|^(\(\d{3}\)\d{3}-\d{4})$|^(1\(\d{3}\)\d{3}-\d{4})$|^(\d\s\d{3}\s\d{3}\s\d{4})$/g;

  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555"));
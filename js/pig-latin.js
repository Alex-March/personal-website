// Pig Latin 

function translatePigLatin(str) {
  let regexCons = /^[aeiou]/;
  let testOne = regexCons.test(str);
  let regexNoVow = /^[^aeiou]*$/;
  let testTwo = regexNoVow.test(str);
  // console.log(regexNoVow.test("schwartz") + "yoyoyo")
  let index = 0;

  if (testOne) {
    return str + "way";
  } else if (testTwo) {
      return str + "ay";
  } else {

      for (let c of str) {
        // Loop through the string until the first vowel has been found
        if ('aeiou'.includes(c)) {
          index = str.indexOf(c);
          // once we find the index of the first vowel we jump out of the loop
          break;
        }
      }
      // the new String
      return str.slice(index) + str.slice(0, index) + "ay";

  }
}

translatePigLatin("consonant");

console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));
console.log("rhythm", translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));

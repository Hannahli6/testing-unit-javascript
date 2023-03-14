function caesarCipher(string, shiftFactor) {
  if (typeof string != "string") {
    return "not a string!";
  } else {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    let newString = "";
    let currentString = string.toLocaleLowerCase();
    for (let i = 0; i < currentString.length; i++) {
      if (alphabet.includes(currentString[i])) {
        let currentCharacterPosition = alphabet.indexOf(currentString[i]);
        let encryptCharacterPosition = currentCharacterPosition + shiftFactor;
        newString += alphabet[encryptCharacterPosition%alphabet.length];
      }else{
        newString += currentString[i];
      }
    }
    return newString;
  }
}
// cases
// 1234 -> not a string
// "1234" -> "1234"
// "abcd123$", 1 -> "bcde123$"
// "ABC", 1 -> "abc"
// "xyzabc", 1 -> "yzabcd"
export default caesarCipher;

function reverseString (string) {
  if(typeof string !== "string"){
    return "not a string!"
  }else{
    let newString = "";
    for(let i= string.length-1; i>=0; i--){
      newString += string[i];
    }
    return newString;
  }

}
// A reverseString function that takes a string and returns it reversed
// edge cases
// hello -> olleh
// HellO -> OlleH
// hello123 -> 321olleh
// !@#123hi -> ih321#@!
// 123 -> not a string!

export default reverseString;
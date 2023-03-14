import caesarCipher from "./caesarCipher";

test("1234 should be 'not a string!' ", ()=>{
  expect((caesarCipher(1234, 1))).toBe("not a string!")
});

test(" 'abcd' should be 'bcde' ", ()=>{
  expect((caesarCipher("abcd",1))).toBe("bcde")
})

test(" '1234' should be '1234' ", ()=>{
  expect((caesarCipher("1234", 1))).toBe("1234")
})

test(" 'abcd123$' should be 'bcde123$' ", ()=>{
  expect((caesarCipher("abcd123$",1))).toBe("bcde123$")
})

test(" 'abcd efg' should be 'bcde fgh' ", ()=>{
  expect((caesarCipher("abcd efg",1))).toBe("bcde fgh")
})

test(" 'ABC' should be 'abc' ", ()=>{
  expect((caesarCipher("ABC",1))).toBe("bcd")
})

test(" 'xyzabc' should be 'yzabcd' ", ()=>{
  expect((caesarCipher("xyzabc", 1))).toBe("yzabcd")
})



import reverseString from "./reverseString";

test('"hello" should become "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('"HellO" should become "OlleH"', () => {
  expect(reverseString('HellO')).toBe('OlleH');
});

test('"hello123" should become "321olleh"', () => {
  expect(reverseString('hello123')).toBe('321olleh');
});


test('"!@#123hi" should become "ih321#@!"', () => {
  expect(reverseString('!@#123hi')).toBe('ih321#@!');
});

test(' "1234" should become "4321"', () => {
  expect(reverseString("1234")).toBe('4321');
});


test(' 1234 should become "not a string!"', () => {
  expect(reverseString(1234)).toBe('not a string!');
});

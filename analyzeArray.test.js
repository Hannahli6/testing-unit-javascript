import analyzeArray from "./analyzeArray";

test("#1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(
      {
        "average": 4,
        "min": 1,
        "max": 8,
        "length": 6,
      }
  );
});

test("#2", () => {
  expect(analyzeArray(1234)).toBe(
    'not valid input'
  );
});

test("#3", () => {
  expect(analyzeArray(['abcd'])).toBe(
    'not valid input'
  );
});

test("#4", () => {
  expect(analyzeArray([1,2,3,'a'])).toBe(
    'not valid input'
  );
});

test("#5", () => {
  expect(analyzeArray(['1','2'])).toBe(
    'not valid input'
  );
});




// cases
// 1234 => not valid input
// ['abcd'] => not valid input
// [1,2,3,'a'] => not valid input
// ['1','2'] => not valid input

// [1,2,3,4,5] => object == { average: 3, min: 1, max: 5, length: 5}
// [1,2.9,3,4,5] => object == { average: 3, min: 1, max: 5, length: 5}
// average should round down

// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);
  expect(uniqueElements([0, 1], [1, 3, 4, 5])).toStrictEqual([
    0,
    3,
    4,
    5,
  ]);

  expect(uniqueElements([0, 1, 3, 4, 5, 6], [1, 3, 4, 5])).toStrictEqual([
    0,
    6,
  ]);
  expect(uniqueElements([4, 5, 6, 7, 2], [1, 3, 4, 5, 0])).toStrictEqual([
    6,
    7,
    2,
    1,
    3,
    0
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect

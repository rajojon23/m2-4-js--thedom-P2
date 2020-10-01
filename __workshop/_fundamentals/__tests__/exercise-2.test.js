// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted(["bacon", false, 42, "ham" , "egg", true, 99])).toStrictEqual(["redacted", false, 42, "redacted" , "redacted", true, 99]);
  expect(redacted(["coffee", "bread" , "butter", true, 99])).toStrictEqual(["redacted", "redacted" , "redacted", true, 99]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect

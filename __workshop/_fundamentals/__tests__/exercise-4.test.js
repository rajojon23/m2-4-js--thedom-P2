// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
        { name: "Dom", amount: 3 },
      ],
      "amount"
    )
  ).toBe(148);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
        { name: "Dom", amount: 3 },
      ],
      "no"
    )
  ).toBe(NaN);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
        { name: "Dom", amount: 3 },
      ],
      "name"
    )
  ).toBe(0);
});

// More info on jest expect: https://jestjs.io/docs/en/expect

// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);


  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
        { name: "ferb", age: 12 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
    { name: "ferb", age: 12, isAvailable: true },
  ]);

  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
        { name: "ferb", age: 12 },
        { name: "phineas", age: 12 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
    { name: "ferb", age: 12, isAvailable: true },
    { name: "phineas", age: 12, isAvailable: true },
  ]);

  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
        { name: "ferb", age: 12 },
        { name: "phineas", age: 12 },
      ],
      { isGreat: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isGreat: true },
    { name: "liv", age: 36, isGreat: true },
    { name: "dave", age: 43, isGreat: true },
    { name: "ferb", age: 12, isGreat: true },
    { name: "phineas", age: 12, isGreat: true },
  ]);

  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect

// spec/greeting.spec.js

const greeting = require("../src/greeting");

describe("The function greeting", () => {
  test("should greet all Ironhackers", () => {
    expect(greeting()).toEqual("Hello Ironhackers!");
  });
});

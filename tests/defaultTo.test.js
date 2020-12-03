import defaultTo from "../src/defaultTo";

test("Test 'defaultTo' method when product has the price", () => {
  expect(defaultTo(0, 10)).toEqual(0);
  expect(defaultTo(15, 10)).toEqual(15);
});

test("Test 'defaultTo' method when product has no price", () => {
  expect(defaultTo(null, 10)).toEqual(10);
  expect(defaultTo(undefined, 10)).toEqual(10);
});

test("Test 'defaultTo' method when product has price in other format", () => {
  expect(defaultTo("", 10)).toEqual("");
  expect(defaultTo("15", 10)).toEqual("15");
  expect(defaultTo([15], 10)).toEqual([15]);
});

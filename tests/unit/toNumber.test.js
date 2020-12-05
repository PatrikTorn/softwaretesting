import toNumber from "../../src/toNumber";

test("Test is Number.MIN_VALUE", () => {
  expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
});

test("Test is Infinity", () => {
  expect(toNumber(Infinity)).toBe(Infinity);
});

test("Test is '3.2'", () => {
  expect(toNumber("3.2")).toBe(3.2);
});

import toString from "../../src/toString";

//Bug found
test("Test is null", () => {
  expect(toString(null)).toBe("");
});

test("Test is -0", () => {
  expect(toString(-0)).toBe("-0");
});

test("Test is [1, 2, 3]", () => {
  expect(toString([1, 2, 3])).toBe("1,2,3");
});

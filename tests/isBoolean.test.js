import isBoolean from "../src/isBoolean";

test("Test is boolean negative", () => {
  expect(isBoolean("asd")).toBeFalsy();
});


test("Test is boolean negative", () => {
  expect(isBoolean(null)).toBeFalsy();
});

test("Test is boolean positive", () => {
  expect(isBoolean(true)).toBeTruthy();
});
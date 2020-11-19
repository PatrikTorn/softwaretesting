import isBoolean from "../src/isBoolean";

test("Test is boolean negative", () => {
  expect(isBoolean("asd")).toBeFalsy();
});

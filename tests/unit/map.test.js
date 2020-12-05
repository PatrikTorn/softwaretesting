import map from "../../src/map";

test("Test is [4, 8], square", () => {
  function square(n) {
    return n * n;
  }

  expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

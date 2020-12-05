import compact from "../../src/compact";

test("Test 'compact' method by example CAUSES FAILURE", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

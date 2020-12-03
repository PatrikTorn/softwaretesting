import compact from "../src/compact";

test("Test 'compact' method by example CAUSES FAILURE", () => {
  expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("Test 'compact' method to give produts in pages CAUSES FAILURE", () => {
  expect(compact(PRICES)).toEqual([1.25, 2.52, null, false, 15, "", 0]);
});

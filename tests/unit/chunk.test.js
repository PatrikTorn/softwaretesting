import chunk from "../../src/chunk";
import { PRODUCT_NAMES } from "../resources/products";

const PRODUCTS = [
  PRODUCT_NAMES.CUCUMBER,
  PRODUCT_NAMES.TOMATO,
  PRODUCT_NAMES.RIBS,
  PRODUCT_NAMES.CHICKEN,
];

test("Test 'chunck' example method CAUSES FAILURE", () => {
  expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
    ["a", "b"],
    ["c", "d"],
  ]);
});

test("Test 'chunck' method to give produts in pages CAUSES FAILURE", () => {
  expect(chunk(PRODUCTS, 2)).toEqual([
    [PRODUCT_NAMES.CUCUMBER, PRODUCT_NAMES.TOMATO],
    [PRODUCT_NAMES.RIBS, PRODUCT_NAMES.CHICKEN],
  ]);

  expect(chunk(PRODUCTS, 3)).toEqual([
    [PRODUCT_NAMES.CUCUMBER, PRODUCT_NAMES.TOMATO, PRODUCT_NAMES.RIBS],
    [PRODUCT_NAMES.CHICKEN],
  ]);

  expect(chunk(PRODUCTS, 5)).toEqual([
    [
      PRODUCT_NAMES.CUCUMBER,
      PRODUCT_NAMES.TOMATO,
      PRODUCT_NAMES.RIBS,
      PRODUCT_NAMES.CHICKEN,
    ],
  ]);
});

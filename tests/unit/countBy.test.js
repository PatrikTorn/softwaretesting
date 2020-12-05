import countBy from "../../src/countBy";
import { PRODUCTS_LIST, PRODUCT_CATEGORIES } from "../resources/products";

const products = [
  { name: "chicken", outOfStock: true },
  { name: "tomato", outOfStock: true },
  { name: "cucumber", outOfStock: false },
];

test("Test 'countBy' method CAUSES FAILURE", () => {
  expect(countBy(products, (value) => value.outOfStock)).toEqual({
    false: 1,
    true: 2,
  });
});

test("Test 'countBy' method by product categories CAUSES FAILURE", () => {
  expect(
    countBy(
      [...PRODUCTS_LIST[0].products, ...PRODUCTS_LIST[1].products],
      (value) => value.category
    )
  ).toEqual({
    [PRODUCT_CATEGORIES.VEGETABLES]: 2,
    [PRODUCT_CATEGORIES.MEATS]: 2,
  });
});

test("Test 'countBy' method by wrong parameter", () => {
  expect(countBy("", (value) => value)).toEqual({});

  expect(countBy([], (value) => value)).toEqual({});
});

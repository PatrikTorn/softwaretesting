import at from "../../src/at";
import {
  PRODUCTS_LIST,
  PRODUCT_CATEGORIES,
  PRODUCT_NAMES,
  PRODUCT_PRICES,
} from "../resources/products";

test("Test shopping cart with found product names by method 'at'", () => {
  expect(
    at(PRODUCTS_LIST, "[0].products[0].name", "[1].products[1].name")
  ).toEqual([PRODUCT_NAMES.CUCUMBER, PRODUCT_NAMES.CHICKEN]);

  expect(at(PRODUCTS_LIST, "[0].products[1].price")).toEqual([
    PRODUCT_PRICES.TOMATO,
  ]);
});

test("Test shopping cart with not found product names by method 'at'", () => {
  expect(
    at(PRODUCTS_LIST, "[2].products[0].name", "[0].products[0].name")
  ).toEqual([undefined, PRODUCT_NAMES.CUCUMBER]);
});

test("Test 'at' method with different syntax", () => {
  expect(at(PRODUCTS_LIST, "0.name", "1.name")).toEqual([
    PRODUCT_CATEGORIES.VEGETABLES,
    PRODUCT_CATEGORIES.MEATS,
  ]);
});

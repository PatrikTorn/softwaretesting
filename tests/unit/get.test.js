import get from "../../src/get";
import {
  PRODUCTS_LIST,
  PRODUCT_CATEGORIES,
  PRODUCT_NAMES,
  PRODUCT_PRICES,
} from "../resources/products";

test("Test 'get' method to find product", () => {
  expect(get(PRODUCTS_LIST, "[0].products[0].name")).toEqual(
    PRODUCT_NAMES.CUCUMBER
  );

  expect(get(PRODUCTS_LIST, "[1].products[1].price")).toEqual(
    PRODUCT_PRICES.CHICKEN
  );
});

test("Test 'get' method with bad index", () => {
  expect(get(PRODUCTS_LIST, "[0].products[5].name")).toEqual(undefined);

  expect(get(PRODUCTS_LIST, "something_bad")).toEqual(undefined);
});

test("Test 'get' method with different syntax", () => {
  expect(get(PRODUCTS_LIST, "0.name")).toEqual(PRODUCT_CATEGORIES.VEGETABLES);
});

import defaultTo from "../../src/defaultTo";
import filter from "../../src/filter";
import get from "../../src/get";
import isBoolean from "../../src/isBoolean";
import toNumber from "../../src/toNumber";
import {
  PRODUCTS_LIST,
  PRODUCT_CATEGORIES,
  PRODUCT_DISCOUNTS,
  PRODUCT_PRICES,
} from "../resources/products";

test("Test calculate shopping cart total price by sales vegetable products", () => {
  const vegetablesCategories = filter(
    PRODUCTS_LIST,
    (category) => category.name === PRODUCT_CATEGORIES.VEGETABLES
  );
  const vegetableProducts = get(vegetablesCategories, "0.products");

  const saleVegetableProducts = filter(
    vegetableProducts,
    (product) => isBoolean(product.sale) && product.sale === true
  );

  const prices = saleVegetableProducts.map((product) =>
    toNumber(defaultTo(product.price, 0) * product.salePercent)
  );

  expect(prices).toContain(PRODUCT_PRICES.TOMATO * PRODUCT_DISCOUNTS.TOMATO);
});

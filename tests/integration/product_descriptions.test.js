import at from "../../src/at";
import capitalize from "../../src/capitalize";
import defaultTo from "../../src/defaultTo";
import { PRODUCTS_LIST } from "../resources/products";

test("Test product descriptions", () => {
  const descriptions = at(
    PRODUCTS_LIST,
    "0.products.0.description",
    "0.products.1.description",
    "1.products.0.description",
    "1.products.1.description"
  )
    .map((description) => defaultTo(description, "no description"))
    .map((description) => capitalize(description));

  expect(descriptions[0]).toBe("No description");
  expect(descriptions[1]).toBe("Fresh cucumber from finland");
  expect(descriptions[2]).toBe("No description");
  expect(descriptions[3]).toBe("Good chicken from thailand. no salmonella.");
});

import capitalize from "../src/capitalize";

test("Test 'capitalize' method positive cases", () => {
  expect(capitalize("cucumber")).toEqual("Cucumber");
  expect(capitalize("description of the product")).toEqual(
    "Description of the product"
  );
});

test("Test 'capitalize' method negative cases", () => {
  expect(capitalize("_cucumber")).toEqual("_cucumber");
  expect(capitalize(" description of the product")).toEqual(
    " description of the product"
  );
});

test("Test 'capitalize' method without string type", () => {
  expect(capitalize(null)).toEqual("Null");
  expect(capitalize(["array1", "array2"])).toEqual("Array1,array2");
  expect(capitalize(true)).toEqual("True");
});

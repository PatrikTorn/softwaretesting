import isDate from "../src/isDate";

test("Test is new Date", () => {
  expect(isDate(new Date)).toBeTruthy();
});

test("Test is 'Mon April 23 2012'", () => {
    expect(isDate('Mon April 23 2012')).toBeFalsy();
});
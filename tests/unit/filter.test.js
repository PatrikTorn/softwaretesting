import filter from "../../src/filter";

test("Test filter", () => {
  const users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
  ];

  const barney = [{ user: "barney", active: true }];

  expect(filter(users, ({ active }) => active)).toEqual(
    expect.objectContaining(barney)
  );
});

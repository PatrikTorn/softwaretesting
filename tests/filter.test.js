import filter from "../src/filter";

test("Test filter", () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ]
    
  expect(filter(users, ({ active }) => active)).toBe(objectContaining({
      user: expect.any(String),
      active: expect(true),      
    }),
  );
});
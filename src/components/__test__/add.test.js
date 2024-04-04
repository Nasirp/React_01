import { add } from "../add";

test("add function should calculate sum of two number ", () => {

  const result = add(3, 4);

  expect(result).toBe(7);
});

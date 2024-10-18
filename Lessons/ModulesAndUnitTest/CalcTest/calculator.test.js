import { calc } from "./calculator";

it ("should return an addition", () => {
    const result = calc("1 + 3");
    expect(result).toEqual("1 + 3 = 4");
});

it("should return a deduction", () => {
  const result = calc("5 - 3");
  expect(result).toEqual("5 - 3 = 2");
});

it("should return multiplication", () => {
  const result = calc("5 * 3");
  expect(result).toEqual("5 * 3 = 15");
});

it("should return division", () => {
  const result = calc("6 / 3");
  expect(result).toEqual("6 / 3 = 2");
});

it("should return null", () => {
  const result = calc(6 / 3);
  expect(result).toEqual(null);
});

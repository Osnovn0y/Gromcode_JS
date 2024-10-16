import getMinSquaredNumber from "./getMinSquaredNumber";

it("should return min squared number", () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
})

it("should return null", () => {
  const result = getMinSquaredNumber('sdfs');

  expect(result).toEqual(null);
});

it("should return null", () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});
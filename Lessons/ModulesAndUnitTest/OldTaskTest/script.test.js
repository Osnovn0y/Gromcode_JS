import { withdraw, reverseArray, getAdults } from "./script";

it ("should return 37", () => {
    const result = withdraw(
      ["Ann", "John", "User"],
      [1400, 87, -6],
      "John",
      50
    );
    expect(result).toEqual(37);
})

it("should return -1", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10);
  expect(result).toEqual(-1);
});

it("should return null", () => {
  const result = withdraw("Ann", "John", "User", [1400, 87, -6], "User", 10);
  expect(result).toEqual(null);
});

it ("should return reversed array", () => {
    const result = reverseArray([0, 0, 1, 3]);
    expect(result).toEqual([3, 1, 0, 0])
});

it("should return null", () => {
  const result = reverseArray([]);
  expect(result).toEqual(null);
});

it("should return null", () => {
  const result = reverseArray(1, 2, 3);
  expect(result).toEqual(null);
});

it("should return an object with adults", () => {
    const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ "John Doe": 19, Bob: 18 });
})

it("should return an object with adult", () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it("should return an empty object", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});
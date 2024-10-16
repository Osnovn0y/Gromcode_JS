it('17 и в Африке 17', () => {
    expect(17).toEqual(17)
});

it("18 это вам не 17", () => {
  expect(17).not.toEqual(18);
});

const getEvenNumber = numbers => numbers.filter(num => (num % 2 == 0));

it('should get even numbers from array', () => {
    const result = getEvenNumber([1, 2, 3, 4]);

    expect(result).toEqual([2, 4]);
})
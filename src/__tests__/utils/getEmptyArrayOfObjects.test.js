import { getEmptyArrayOfObjects } from "utils";

describe("testing getEmptyArrayOfObjects", () => {
  it("should return array of objects of given length", () => {
    const expectedResult = [
      {
        _id: expect.any(String),
      },
    ];

    const result = getEmptyArrayOfObjects(1);

    expect(result).toEqual(expectedResult);
  });
});

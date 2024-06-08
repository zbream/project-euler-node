import { isPandigital } from "./pandigital";

describe("isPandigital", () => {
  it.each([123456789, 987654321, 192837465])("should pass on %i", (n) => {
    expect(isPandigital(n)).toBeTruthy();
  });

  it.each([0, 1, 123, 1234567890, 1234567895])("should fail on %i", (n) => {
    expect(isPandigital(n)).toBeFalsy();
  });
});

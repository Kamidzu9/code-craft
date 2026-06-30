import { describe, it, expect } from "vitest";
import { evenNumbers } from "./solutions";

describe("evenNumbers", () => {
  it("should keep only even numbers", () => {
    expect(evenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
    expect(evenNumbers([1, 3, 5])).toEqual([]);
    expect(evenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
    expect(evenNumbers([])).toEqual([]);
  });
});

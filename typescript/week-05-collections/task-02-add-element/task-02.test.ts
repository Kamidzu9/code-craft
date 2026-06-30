import { describe, it, expect } from "vitest";
import { addElement } from "./solutions";

describe("addElement", () => {
  it("should add the value at the end", () => {
    expect(addElement([1, 2], 3)).toEqual([1, 2, 3]);
    expect(addElement([], 5)).toEqual([5]);
  });
  it("should not mutate the original array", () => {
    const original = [1, 2];
    const result = addElement(original, 3);
    expect(original).toEqual([1, 2]);
    expect(result).toEqual([1, 2, 3]);
  });
});

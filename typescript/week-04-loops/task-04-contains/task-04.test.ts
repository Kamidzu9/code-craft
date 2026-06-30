import { describe, it, expect } from "vitest";
import { contains } from "./solutions";

describe("contains", () => {
  it("should return true if value is in array", () => {
    expect(contains([1, 2, 3], 2)).toBe(true);
    expect(contains([5], 5)).toBe(true);
  });
  it("should return false if value is not in array", () => {
    expect(contains([1, 2, 3], 4)).toBe(false);
    expect(contains([], 1)).toBe(false);
  });
});

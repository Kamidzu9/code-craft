import { describe, it, expect } from "vitest";
import { findMax } from "./solutions";

describe("findMax", () => {
  it("should find the maximum value", () => {
    expect(findMax([1, 5, 3])).toBe(5);
    expect(findMax([-1, -5, -2])).toBe(-1);
    expect(findMax([7])).toBe(7);
  });
  it("should return null for empty array", () => {
    expect(findMax([])).toBeNull();
  });
});

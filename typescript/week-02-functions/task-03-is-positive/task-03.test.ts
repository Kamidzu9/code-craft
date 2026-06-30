import { describe, it, expect } from "vitest";
import { isPositive } from "./solutions";

describe("isPositive", () => {
  it("should return true for positive numbers", () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(100)).toBe(true);
  });
  it("should return false for non-positive numbers", () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });
});
